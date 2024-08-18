import React from "react";
import "../styles/navbar.css"; // We'll create this file next

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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Find Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Employers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>

          {/* Right-aligned buttons */}
          <div className="d-flex">
            <a href="/" className="btn btn-outline-primary me-2">
              Contact Us
            </a>
            <a href="/" className="btn btn-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
