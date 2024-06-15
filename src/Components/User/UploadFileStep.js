import React, { useState } from "react";

const UploadFileStep = ({ completeSignup }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    completeSignup(file);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Upload File</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Upload File:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Complete Signup
        </button>
      </form>
    </div>
  );
};

export default UploadFileStep;
