import React, { useState } from "react";
import axios from "axios";
import PhoneNumberStep from "./PhoneNumberStep";
import PersonalInfoStep from "./PersonalInfoStep";
import MotorcycleStep from "./MotorcycleStep";
import AgreementStep from "./AgreementStep";
import RulesStep from "./RulesStep";
import UploadFileStep from "./UploadFileStep";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [motorcycleNumber, setMotorcycleNumber] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [rulesAgreed, setRulesAgreed] = useState(false);
  const navigate = useNavigate();
  const nextStep = () => {
    setStep(step + 1);
  };

  const completeSignup = (file) => {
    // Add final signup logic here
    console.log("Signup Complete");
    console.log({
      phoneNumber,
      fullName,
      passportNumber,
      motorcycleNumber,
      agreement,
      rulesAgreed,
      file,
    });

    const formData = new FormData();
    formData.append("phone_number", phoneNumber);
    formData.append("display_name", fullName);
    formData.append("id_national", passportNumber);
    formData.append("account_moto", motorcycleNumber);
    formData.append("agreement", agreement);
    formData.append("rules_agreed", rulesAgreed);
    formData.append("file", file);
    const token = localStorage.getItem("token");
    axios
      .put("http://localhost:8000/user/me/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate("/confirmation");
        console.log("Signup response:", response.data);
      })
      .catch((error) => {
        console.error("There was an error completing the signup!", error);
      });
  };

  switch (step) {
    case 1:
      return (
        <PhoneNumberStep nextStep={nextStep} setPhoneNumber={setPhoneNumber} />
      );
    case 2:
      return (
        <PersonalInfoStep
          nextStep={nextStep}
          setFullName={setFullName}
          setPassportNumber={setPassportNumber}
        />
      );
    case 3:
      return (
        <MotorcycleStep
          nextStep={nextStep}
          setMotorcycleNumber={setMotorcycleNumber}
        />
      );
    case 4:
      return <AgreementStep nextStep={nextStep} setAgreement={setAgreement} />;
    case 5:
      return <RulesStep nextStep={nextStep} setRulesAgreed={setRulesAgreed} />;
    case 6:
      return <UploadFileStep completeSignup={completeSignup} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default SignupForm;
