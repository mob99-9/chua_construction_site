import React, { useState } from "react";

function StepTwo({ formData, setFormData, onNext, onBack, isSubmitting, submitError }) {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "projectDescription") {
      if (!value.trim()) {
        error = "Project Description is required.";
      } else if (value.trim().length < 10) {
        error = "Project Description must be at least 10 characters.";
      } else if (value.trim().length > 1000) {
        error = "Project Description cannot exceed 1000 characters.";
      } else if (/(.)\1{5,}/i.test(value)) {
        error = "Please avoid repeating characters.";
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

    // Filter estimated budget to allow only digits (positive integers only)
    if (name === "estimatedBudget") {
      sanitizedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    validateField(name, sanitizedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isDescValid = validateField("projectDescription", formData.projectDescription);
    const isBudgetValid = validateField("estimatedBudget", formData.estimatedBudget);
    const isDateValid = validateField("expectedStartDate", formData.expectedStartDate);

    if (isDescValid && isBudgetValid && isDateValid) {
      await onNext();
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Project Description</label>
        <textarea
          name="projectDescription"
          rows="10"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Describe your project requirements (minimum 10 characters)..."
          className={errors.projectDescription ? "input-error" : ""}
          maxLength={1000}
        ></textarea>
        {errors.projectDescription && (
          <span className="error-message-text">{errors.projectDescription}</span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Estimated Project Budget (Optional)</label>
          <input
            type="text" // Use text to block non-digits cleanly
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

      <div className="form-actions">
        <button type="button" className="back-btn" onClick={onBack}>
          Back
        </button>

        <button type="submit" className="next-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Next"}
        </button>
      </div>

      {submitError && <span className="error-message-text">{submitError}</span>}
    </form>
  );
}

export default StepTwo;