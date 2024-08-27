import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-primary">AlwaysApply</h5>
            <p>
              Call now:{" "}
              <a href="tel:+919591776078" className="text-primary">
                +92 3403690911
              </a>
            </p>
            <p>Defence View Phase Two Karachi, Sindh, Pakistan</p>
          </div>
          {/* Quick Link */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-muted">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#admin" className="text-muted">
                  Admin
                </a>
              </li>
            </ul>
          </div>
          {/* Candidate */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Candidate</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#browse-jobs" className="text-muted">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#browse-employers" className="text-muted">
                  Browse Employers
                </a>
              </li>
              <li>
                <a href="#candidate-dashboard" className="text-muted">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#saved-jobs" className="text-muted">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>
          {/* Employers */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Employers</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#post-job" className="text-muted">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#browse-candidates" className="text-muted">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#employers-dashboard" className="text-muted">
                  Employers Dashboard
                </a>
              </li>
              <li>
                <a href="#applications" className="text-muted">
                  Applications
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        {/* Footer Bottom */}
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © 2024 JobHunter – Job Portal. All rights reserved
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#facebook" className="text-muted mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#youtube" className="text-muted mx-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#instagram" className="text-muted mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#twitter" className="text-muted mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
