import axiosClient from "./axios-client";

export const submitInquiry = async (payload) => {
  const response = await axiosClient.post("/api/send-email", payload);

  if (!response.data?.ok) {
    throw new Error(response.data?.error || "Unable to send your inquiry.");
  }

  return response.data;
};
