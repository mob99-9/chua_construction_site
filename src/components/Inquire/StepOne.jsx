import React, { useState } from "react";

function StepOne({ formData, setFormData, onNext }) {
  const [errors, setErrors] = useState({});

  // Helper to check for repeating/spam characters (5 or more consecutive)
  const hasRepeatingSpam = (str) => /(.)\1{4,}/i.test(str);

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full Name is required.";
      } else if (value.trim().length < 2) {
        error = "Full Name must be at least 2 characters.";
      } else if (value.trim().length > 60) {
        error = "Full Name cannot exceed 60 characters.";
      } else if (hasRepeatingSpam(value)) {
        error = "Please avoid spam/repeating characters.";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email Address is required.";
      } else if (value.trim().length > 100) {
        error = "Email Address cannot exceed 100 characters.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address.";
      } else if (hasRepeatingSpam(value.split("@")[0])) {
        error = "Please avoid spam/repeating characters in email.";
      }
    }

    if (name === "contactNumber") {
      if (!value.trim()) {
        error = "Contact Number is required.";
      } else {
        const digitCount = value.replace(/\D/g, "").length;
        if (digitCount < 7 || digitCount > 15) {
          error = "Contact Number must contain between 7 to 15 digits.";
        } else if (/(.)\1{5,}/.test(value.replace(/\D/g, ""))) {
          error = "Please avoid repeating digits.";
        }
      }
    }

    if (name === "serviceType") {
      if (!value) {
        error = "Please select a type of service.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Strict input character filtering as the user types
    if (name === "fullName") {
      // Allow only letters, spaces, dots, hyphens, and ñ/Ñ
      sanitizedValue = value.replace(/[^a-zA-Z\s.\-ñÑ]/g, "");
    } else if (name === "contactNumber") {
      // Allow only numbers, spaces, hyphens, parentheses, and leading plus
      sanitizedValue = value.replace(/[^\d\s\-()+]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    validateField(name, sanitizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateField("fullName", formData.fullName);
    const isEmailValid = validateField("email", formData.email);
    const isContactValid = validateField("contactNumber", formData.contactNumber);
    const isServiceValid = validateField("serviceType", formData.serviceType);

    if (isNameValid && isEmailValid && isContactValid && isServiceValid) {
      onNext();
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name (letters only)"
          className={errors.fullName ? "input-error" : ""}
          maxLength={60}
        />
        {errors.fullName && (
          <span className="error-message-text">{errors.fullName}</span>
        )}
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter a valid email address"
          className={errors.email ? "input-error" : ""}
          maxLength={100}
        />
        {errors.email && (
          <span className="error-message-text">{errors.email}</span>
        )}
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Enter your contact number (numbers only)"
          className={errors.contactNumber ? "input-error" : ""}
          maxLength={20}
        />
        {errors.contactNumber && (
          <span className="error-message-text">{errors.contactNumber}</span>
        )}
      </div>

      <div className="form-group">
        <label>Type of Service</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={errors.serviceType ? "input-error" : ""}
        >
          <option value="" disabled>
            Pick the type of service
          </option>
          <option value="Floor Plan">Floor Plan</option>
          <option value="3D Render">3D Render</option>
          <option value="Blueprint">Blueprint</option>
          <option value="Design and Build">Design and Build</option>
        </select>
        {errors.serviceType && (
          <span className="error-message-text">{errors.serviceType}</span>
        )}
      </div>

      <button type="submit" className="next-btn">
        Next
      </button>
    </form>
  );
}

export default StepOne;