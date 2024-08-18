import React from "react";
import "../styles/signup.css";
import signup from "../assets/signup.svg";

function Signup() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 signup-image d-flex align-items-center justify-content-center">
          <img src={signup} alt="Infographic" className="img-fluid" />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center signup-form">
          <div className="w-75">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <div className="text-center mt-3">
                <a href="/">Already have an account? Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
