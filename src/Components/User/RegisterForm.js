import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = (password) => {
    // Password strength validation (minimum 8 characters, including uppercase, lowercase, number, and special character)
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setMessage(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    axios
      .post("http://localhost:8000/user/signup/", { email, password })
      .then((response) => {
        setToken(response.data.token);
        setMessage("Registration successful! Logging you in...");
        const token = response.data.access;
        localStorage.setItem("token", token);
        navigate("/verify-email", { state: { email } });
      })
      .catch((error) => {
        setMessage("Error registering email.");
        console.error("There was an error registering the email!", error);
      });
  };

  return (
    <div className="container mt-4">
      <header className="mb-4">
        <h1 className="text-center"> اهلا وسهلا</h1>
        <h1 className="text-center">
          من هنا خطوتك الاؤلى ل شراء دراجة نارية ثم تاجيرها ع سركات معتمدة من
          خلالنا
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
