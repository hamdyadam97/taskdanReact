import React, { useState } from "react";

const PhoneNumberStep = ({ nextStep, setPhoneNumber }) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber(`${countryCode}${phone}`);
    nextStep();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Enter Your Phone Number</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Country Code:</label>
          <input
            type="text"
            className="form-control"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

export default PhoneNumberStep;
