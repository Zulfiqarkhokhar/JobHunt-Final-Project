import React from "react";
import "../styles/login.css";
import login from "../assets/login.webp";

function Login() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left side - Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center login-form">
          <div className="w-50">
            <h2 className="text-center mb-4">Login</h2>
            <form>
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
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <div className="text-center mt-3">
                <a href="/">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Infographic Image */}
        <div className="col-md-6 login-image d-flex align-items-center justify-content-center w-50">
          <img src={login} alt="Infographic" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Login;
