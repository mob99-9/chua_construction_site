import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Success from "./Success";
import { submitInquiry } from "../../api/user-api";
import "./InquiryForm.css";

function InquiryForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    serviceType: "",
    projectDescription: "",
    estimatedBudget: "",
    expectedStartDate: "",
  });

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
    setSubmitError("");
    setIsSubmitting(false);
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitInquiry(values);
      setStep(3);
    } catch (error) {
      setSubmitError(
        error?.response?.data?.error ||
          error?.message ||
          "We couldn't send your request. Please try again."
      );
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
          onSubmit={handleSubmit}
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