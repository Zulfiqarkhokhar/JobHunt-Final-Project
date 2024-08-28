import React from "react";
import "../styles/hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <h1 className="hero-heading">
              Find a job that aligns with your interests and skills
            </h1>
            <p className="hero-subheading">
              Thousands of jobs in all the leading sectors are waiting for you.
            </p>
            <div className="search-bar">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Job title, Keyword..."
                />
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Location"
                />
                <button className="btn btn-primary" type="button">
                  Find Job
                </button>
              </div>
              <p className="suggestion-text">
                Suggestion:
                <span className="suggestion"> UI/UX Designer</span>,
                <span className="suggestion"> Programming</span>,
                <span className="suggestion"> Digital Marketing</span>,
                <span className="suggestion"> Video</span>,
                <span className="suggestion"> Animation</span>.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-none d-lg-block">
            <img
              src={hero}
              alt="Hero Illustration"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
