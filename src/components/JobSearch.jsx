import React, { useState } from "react";
import JobCard from "./JobCard";
import "../styles/JobSearch.css";

const JobSearch = ({ jobsData }) => {
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [salaryRange, setSalaryRange] = useState({ min: "", max: "" });

  const filteredJobs = jobsData.filter((job) => {
    const matchesJobType =
      selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type);
    const matchesSalaryRange =
      (!salaryRange.min ||
        parseInt(job.salary.replace(/[^0-9]/g, "")) >=
          parseInt(salaryRange.min)) &&
      (!salaryRange.max ||
        parseInt(job.salary.replace(/[^0-9]/g, "")) <=
          parseInt(salaryRange.max));
    return matchesJobType && matchesSalaryRange;
  });

  const handleJobTypeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedJobTypes((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((type) => type !== value)
    );
  };

  const handleSalaryRangeChange = (event) => {
    const { name, value } = event.target;
    setSalaryRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  return (
    <div className="job-search-container container">
      <div className="search-bar my-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Job title"
            aria-label="Job title"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            aria-label="Location"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Years of experience"
            aria-label="Experience"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <div className="filter-sidebar">
            <h5>Filter</h5>
            <p className="text-end">Clear all</p>

            <div className="filter-category">
              <h6>Job Type</h6>
              <div>
                <input
                  type="checkbox"
                  value="FULL-TIME"
                  onChange={handleJobTypeChange}
                />
                <label>Full-Time</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="PART-TIME"
                  onChange={handleJobTypeChange}
                />
                <label>Part-Time</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="INTERNSHIP"
                  onChange={handleJobTypeChange}
                />
                <label>Internship</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="CONTRACT"
                  onChange={handleJobTypeChange}
                />
                <label>Contract</label>
              </div>
            </div>

            <div className="filter-category">
              <h6>Salary Range</h6>
              <input
                type="number"
                name="min"
                className="form-control mb-2"
                placeholder="Min"
                value={salaryRange.min}
                onChange={handleSalaryRangeChange}
              />
              <input
                type="number"
                name="max"
                className="form-control"
                placeholder="Max"
                value={salaryRange.max}
                onChange={handleSalaryRangeChange}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>All Jobs ({filteredJobs.length})</h5>
            <select className="form-select w-auto">
              <option>Popular</option>
            </select>
          </div>
          <div className="row">
            {filteredJobs.map((job, index) => (
              <div className="col-md-6 col-lg-6 mb-4" key={index}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#more" className="btn btn-link">
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
