function StepIndicator({ step }) {
  return (
    <div className="step-indicator">

      <div className={`step ${step === 1 ? "active" : ""}`}>
        1
      </div>

      <div className="step-line"></div>

      <div className={`step ${step === 2 ? "active" : ""}`}>
        2
      </div>

    </div>
  );
}

export default StepIndicator;