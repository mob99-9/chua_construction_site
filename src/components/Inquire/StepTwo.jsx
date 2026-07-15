import React, { useState } from "react";

function StepTwo({
  formData,
  setFormData,
  onSubmit,
  onBack,
  isSubmitting,
  submitError,
}) {
  const [errors, setErrors] = useState({});
  const [rateLimitError, setRateLimitError] = useState("");

  const validateField = (name, value) => {
    let error = "";

    if (name === "projectDescription") {
      if (!value.trim()) {
        error = "Project Description is required.";
      } else if (value.trim().length < 10) {
        error = "Project Description must be at least 10 characters.";
      } else if (value.trim().length > 500) {
        error = "Project Description cannot exceed 500 characters.";
      } else if (/(.)\\1{4,}/i.test(value)) {
        error = "Please avoid repeating characters.";
      } else if (/(.{2,})\\1{3,}/i.test(value)) {
        error = "Please avoid repeating words or phrases.";
      }
    }

    if (name === "estimatedBudget") {
      if (value) {
        const budgetNum = Number(value);
        if (isNaN(budgetNum) || budgetNum <= 0) {
          error = "Estimated budget must be a positive number.";
        } else if (budgetNum > 1000000000) {
          error = "Estimated budget cannot exceed 1,000,000,000.";
        }
      }
    }

    if (name === "expectedStartDate") {
      if (value) {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          error = "Expected start date cannot be in the past.";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // For project description: block if user is actively spamming (5+ consecutive same chars)
    if (name === "projectDescription") {
      // Strip any run of 5+ identical characters down to 4 to prevent spam buildup
      sanitizedValue = value.replace(/(.)(\1{4})\1+/gi, "$1$2");
    }

    // Filter estimated budget to allow only digits (positive integers only)
    if (name === "estimatedBudget") {
      sanitizedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    validateField(name, sanitizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRateLimitError("");

    // Rate Limiter Check (60 seconds)
    const lastSubmit = localStorage.getItem("quote_last_submit");
    const now = Date.now();
    if (lastSubmit && now - Number(lastSubmit) < 60000) {
      const waitSeconds = Math.ceil((60000 - (now - Number(lastSubmit))) / 1000);
      setRateLimitError(`Too many submissions. Please wait ${waitSeconds} seconds before trying again.`);
      return;
    }

    const isDescValid = validateField("projectDescription", formData.projectDescription);
    const isBudgetValid = validateField("estimatedBudget", formData.estimatedBudget);
    const isDateValid = validateField("expectedStartDate", formData.expectedStartDate);

    if (!isDescValid || !isBudgetValid || !isDateValid) {
      return;
    }

    // Save timestamp & send the inquiry
    localStorage.setItem("quote_last_submit", String(Date.now()));
    onSubmit(formData);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Project Description</label>
        <textarea
          name="projectDescription"
          rows="8"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Describe your project requirements (10–500 characters)..."
          className={errors.projectDescription ? "input-error" : ""}
          maxLength={500}
        ></textarea>

        {/* Character counter */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "12px",
          color: formData.projectDescription.length > 450 ? "#ef4444" : "#9ca3af",
          marginTop: "4px",
        }}>
          {formData.projectDescription.length} / 500
        </div>

        {errors.projectDescription && (
          <span className="error-message-text">{errors.projectDescription}</span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Estimated Project Budget (Optional)</label>
          <input
            type="text"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            placeholder="Enter the amount in numbers"
            className={errors.estimatedBudget ? "input-error" : ""}
            maxLength={10}
          />
          {errors.estimatedBudget && (
            <span className="error-message-text">{errors.estimatedBudget}</span>
          )}
        </div>

        <div className="form-group">
          <label>Expected Start Date (Optional)</label>
          <input
            type="date"
            name="expectedStartDate"
            value={formData.expectedStartDate}
            onChange={handleChange}
            className={errors.expectedStartDate ? "input-error" : ""}
          />
          {errors.expectedStartDate && (
            <span className="error-message-text">{errors.expectedStartDate}</span>
          )}
        </div>
      </div>

      {rateLimitError && (
        <div style={{
          background: "#fef2f2",
          border: "1px solid #fca5a5",
          borderRadius: "8px",
          padding: "12px 16px",
          marginTop: "12px",
          color: "#dc2626",
          fontSize: "13px",
          fontWeight: "600",
        }}>
          {rateLimitError}
        </div>
      )}

      {submitError && (
        <div style={{
          background: "#fef2f2",
          border: "1px solid #fca5a5",
          borderRadius: "8px",
          padding: "12px 16px",
          marginTop: "12px",
          color: "#dc2626",
          fontSize: "13px",
          fontWeight: "600",
        }}>
          {submitError}
        </div>
      )}

      <div className="form-actions">
        <button type="button" className="back-btn" onClick={onBack}>
          Back
        </button>

        <button type="submit" className="next-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}

export default StepTwo;