import React, { useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/email-verify/", { email, code })
      .then((response) => {
        setMessage("Email verified successfully!");
        const token = response.data.access;
        localStorage.setItem("token", token);
        navigate("/signup");
      })
      .catch((error) => {
        setMessage("Invalid or expired verification code.");
        console.error("There was an error verifying the email!", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Verify Your Email</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Verification Code:</label>
          <input
            type="text"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Verify Email
        </button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default VerifyEmail;
