import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">ﺷكرا لك</h2>
      <p className="text-center">
        ع انهاء التتسجيل سيتم ابلاغك وقت االتاكد من صحة البيانات ع الميل
      </p>
      <button onClick={handleGoHome} className="btn btn-primary mt-3">
        Go to Home
      </button>
    </div>
  );
};

export default Confirmation;
