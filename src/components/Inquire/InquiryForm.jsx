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
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && <Success onBack={handleReset} />}
    </section>
  );
}

export default InquiryForm;