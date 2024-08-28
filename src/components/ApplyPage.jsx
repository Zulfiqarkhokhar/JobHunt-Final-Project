import React, { useState } from "react";

function ApplyPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryExpectation, setSalaryExpectation] = useState("");
  const [resume, setResume] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can implement your logic to submit the application data
    // For example, you could send a POST request to a server
    console.log("Application submitted:", {
      firstName,
      lastName,
      email,
      experience,
      salaryExpectation,
      resume,
    });

    // Set the alert message based on the success or failure of the submission
    setShowAlert(true);
    setAlertMessage("Your application has been submitted successfully!");
  };

  return (
    <div className="apply-page container">
      <h2 className="my-4">Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="experience">Years of Experience</label>
          <input
            type="number"
            className="form-control"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="salaryExpectation">Salary Expectation</label>
          <input
            type="text"
            className="form-control"
            id="salaryExpectation"
            value={salaryExpectation}
            onChange={(e) => setSalaryExpectation(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="resume">Resume Upload</label>
          <input
            type="file"
            className="form-control"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default ApplyPage;
