import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Success from "./Success";
import "./InquiryForm.css";

function InquiryForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    serviceType: "",
    projectDescription: "",
    estimatedBudget: "",
    expectedStartDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      serviceType: "",
      projectDescription: "",
      estimatedBudget: "",
      expectedStartDate: "",
    });
    setStep(1);
    setIsSubmitting(false);
    setSubmitError("");
  };

  const handleSubmitInquiry = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your request right now.");
      }

      setStep(3);
    } catch (error) {
      setSubmitError(error.message || "Unable to send your request right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="quote-card">
      <div className="quote-logo">
        <img src="/arki-logo.png" alt="ARKI Construction Company" />
      </div>

      <h1>Request Quote</h1>

      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          onNext={handleSubmitInquiry}
          onBack={() => setStep(1)}
          isSubmitting={isSubmitting}
          submitError={submitError}
        />
      )}
      {step === 3 && <Success onBack={handleReset} />}
    </section>
  );
}

export default InquiryForm;