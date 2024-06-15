import React, { useState } from 'react';

const PersonalInfoStep = ({ nextStep, setFullName, setPassportNumber }) => {
  const [fullName, setFullNameState] = useState('');
  const [passportNumber, setPassportNumberState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(fullName);
    setPassportNumber(passportNumber);
    nextStep();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Enter Your Personal Information</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullNameState(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Passport Number:</label>
          <input
            type="text"
            className="form-control"
            value={passportNumber}
            onChange={(e) => setPassportNumberState(e.target.value)}
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

export default PersonalInfoStep;
