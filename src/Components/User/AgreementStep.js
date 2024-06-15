import React, { useState } from "react";

const AgreementStep = ({ nextStep, setAgreement }) => {
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms.");
      return;
    }
    setAgreement(agree);
    nextStep();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Agreement to Buy</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreementCheck"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="agreementCheck">
            I agree to buy the motorcycle(s).
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Next
        </button>
      </form>
    </div>
  );
};

export default AgreementStep;
