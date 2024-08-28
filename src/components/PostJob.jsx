import React, { useState } from "react";
import googleIcon from "../assets/googleIcon.png";
import apple from "../assets/apple.png";
import intel from "../assets/intel.png";

const PostJob = ({ jobsData, setJobsData }) => {
  // State for form inputs
  const [jobDetails, setJobDetails] = useState({
    title: "",
    type: "FULL-TIME",
    salary: "",
    company: "",
    location: "",
    applicants: "0 applicants",
    logo: googleIcon, // Default logo, adjust based on user input if needed
    applyLink: "#",
  });

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new job object
    const newJob = {
      ...jobDetails,
      id: jobsData.length + 1, // Set a unique id based on the number of jobs
    };

    // Update jobs data
    setJobsData((prevJobs) => [...prevJobs, newJob]);

    // Reset form fields
    setJobDetails({
      title: "",
      type: "FULL-TIME",
      salary: "",
      company: "",
      location: "",
      applicants: "0 applicants",
      logo: googleIcon,
      applyLink: "#",
    });
  };

  return (
    <div className="post-job-container container my-5">
      <h2 className="my-4">Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Job Type
          </label>
          <select
            className="form-select"
            id="type"
            name="type"
            value={jobDetails.type}
            onChange={handleChange}
          >
            <option value="FULL-TIME">Full-Time</option>
            <option value="PART-TIME">Part-Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="CONTRACT">Contract</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            name="salary"
            value={jobDetails.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={jobDetails.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="logo" className="form-label">
            Company Logo URL
          </label>
          <input
            type="text"
            className="form-control"
            id="logo"
            name="logo"
            value={jobDetails.logo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="applyLink" className="form-label">
            Apply Link
          </label>
          <input
            type="text"
            className="form-control"
            id="applyLink"
            name="applyLink"
            value={jobDetails.applyLink}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
