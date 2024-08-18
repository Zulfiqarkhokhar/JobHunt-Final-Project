import React from "react";
import "../styles/jobcard.css";

function JobCard({ job }) {
  return (
    <div className="card job-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{job.title}</h5>
          <span
            className={`badge d-flex justify-content-center align-items-center ${
              job.type === "FULL-TIME" ? "badge-primary" : "badge-success"
            }`}
          >
            {job.type}
          </span>
        </div>
        <p className="card-text">Salary: {job.salary}</p>
        <div className="d-flex align-items-center mb-3 mt-4">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="company-logo"
          />
          <div>
            <h6 className="company-name">{job.company}</h6>
            <p className="job-location">{job.location}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <p className="applicants">{job.applicants}</p>
          <div>
            <a href="#" className="btn btn-outline-primary btn-sm p-2 mx-2">
              View details
            </a>
            <a href={job.applyLink} className="btn btn-primary btn-sm p-2 ml-2">
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
