import React, { useState } from "react";

const MotorcycleStep = ({ nextStep, setMotorcycleNumber }) => {
  const [motorcycleNumber, setMotorcycleNumberState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMotorcycleNumber(motorcycleNumber);
    nextStep();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Number of Motorcycles to Buy</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Number of Motorcycles:</label>
          <input
            type="number"
            className="form-control"
            value={motorcycleNumber}
            onChange={(e) => setMotorcycleNumberState(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Next
        </button>
      </form>
    </div>
  );
};

export default MotorcycleStep;
