import React, { useState } from "react";

const RulesStep = ({ nextStep, setRulesAgreed }) => {
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the rules.");
      return;
    }
    setRulesAgreed(agree);
    nextStep();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Rules Agreement</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rulesCheck"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="rulesCheck">
            I agree to the rules.
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Next
        </button>
      </form>
    </div>
  );
};

export default RulesStep;
