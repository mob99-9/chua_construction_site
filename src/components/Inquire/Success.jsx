function Success({ onBack }) {
  return (
 <div className="success-message">

    <p>
        A copy of the quote request will be sent to your email.
    </p>

    <p>
        We will reach out to you via email as soon as possible for
        <br />
        further planning.
    </p>

    <h2>We can't wait to work with you!</h2>

    <button
        className="back-btn"
        onClick={onBack}
    >
        Back
    </button>

</div>
  );
}

export default Success;