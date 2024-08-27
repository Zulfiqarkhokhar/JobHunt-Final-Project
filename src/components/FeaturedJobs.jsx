import React from "react";
import JobCard from "./JobCard";
import "../styles/featuredjobs.css";

function FeaturedJobs({ jobsData }) {
  return (
    <section className="featured-jobs-section mt-5">
      <div className="container">
        <h2 className="section-title">Featured Jobs</h2>
        <p className="section-subtitle">
          Choose jobs from the top employers and apply for the same.
        </p>
        <div className="row">
          {jobsData.slice(0, 3).map((job) => (
            <div key={job.id} className="col-md-4">
              <JobCard job={job} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn btn-link">
            View all
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
