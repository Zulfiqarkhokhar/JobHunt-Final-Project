import React from "react";
import "../styles/navbar.css"; // We'll create this file next
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <span className="logo-text">JobHunter</span>
        </a>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/findJobs" className="nav-link">
                Find Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/postJobs" className="nav-link">
                Add Jobs
              </Link>
            </li>
          </ul>

          {/* Right-aligned buttons */}
          <div className="d-flex">
            <Link to={"/"} className="btn btn-primary">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
