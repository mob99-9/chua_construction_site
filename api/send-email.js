import { createServer } from "node:http";
import { pathToFileURL } from "node:url";
import { config } from "dotenv";
import { Resend } from "resend";

config();

const resend = new Resend(process.env.RESEND_API_KEY);

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    // 1. If an upstream middleware or runtime already parsed the body, use it immediately
    if (req.body !== undefined && req.body !== null) {
      if (typeof req.body === "object") return resolve(req.body);
      try {
        return resolve(JSON.parse(req.body));
      } catch (error) {
        return reject(new Error("Malformed JSON body in req.body"));
      }
    }

    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      if (!data.trim()) {
        return resolve({}); // Return empty object safely if no body exists
      }
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(new Error("Invalid JSON payload received from stream"));
      }
    });

    req.on("error", reject);
  });
}

function buildTemplateVariables(payload) {
  return {
    customer_name: payload.fullName || "N/A",
    customer_email: payload.email || "N/A",
    customer_phone: payload.contactNumber || "N/A",
    service_needed: payload.serviceType || "N/A",
    budget: payload.estimatedBudget || "N/A",
    start_date: payload.expectedStartDate || "N/A",
    project_details: payload.projectDescription || "N/A",
  };
}

export async function submitInquiry(req, res) {
  if (req.method === "OPTIONS") {
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, error: "Method Not Allowed" });
  }

  try {
    const payload = await readJsonBody(req);
    const required = ["fullName", "email", "projectDescription"];
    const missing = required.filter((field) => !String(payload[field] || "").trim());

    if (missing.length) {
      return sendJson(res, 400, { ok: false, error: "Missing required fields" });
    }

    if (!process.env.RESEND_API_KEY) {
      return sendJson(res, 500, { ok: false, error: "RESEND_API_KEY is not set." });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "your-personal-email@gmail.com",
      subject: `Quote Request from ${payload.fullName}`,
      template: "new-project-inquiry", // Replace with actual template ID
      templateVariables: buildTemplateVariables(payload),
    });

    return sendJson(res, 200, { ok: true, message: "Email sent successfully." });
  } catch (error) {
    return sendJson(res, 500, { ok: false, error: error.message });
  }
}

function requestHandler(req, res) {
  const { pathname } = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (pathname === "/api/send-email" || pathname === "/send-email") {
    return submitInquiry(req, res);
  }

  if (req.method === "GET") {
    return sendJson(res, 200, { ok: true, message: "Email API is running." });
  }

  return sendJson(res, 404, { ok: false, error: "Not Found" });
}

export default async function handler(req, res) {
  return requestHandler(req, res);
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectRun) {
  const port = Number(process.env.EMAIL_PORT || 3001);

  createServer(requestHandler).listen(port, () => {
    console.log(`Email API listening on http://localhost:${port}`);
  });
}