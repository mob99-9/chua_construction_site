import "./InquirySummary.css";

function InquirySummary() {
  return (
    <section className="inquiry-summary">
      <span className="section-label">Start Your Project</span>

      <h1>Tell us about your construction needs</h1>

      <p>
        Share your project details with us and our team will help you plan the
        right design, materials, and construction approach.
      </p>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>01</h3>
          <h4>Send Inquiry</h4>
          <p>Fill out the form with your project information.</p>
        </div>

        <div className="summary-card">
          <h3>02</h3>
          <h4>Project Review</h4>
          <p>Our team reviews your requirements and timeline.</p>
        </div>

        <div className="summary-card">
          <h3>03</h3>
          <h4>Get Response</h4>
          <p>We contact you with next steps and recommendations.</p>
        </div>
      </div>
    </section>
  );
}

export default InquirySummary;