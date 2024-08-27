import React from "react";
import "../styles/TopCompanies.css";
import google from "../assets/google.png";
import flipcart from "../assets/flipcart.png";
import youtube from "../assets/youtube.png";
import ibm from "../assets/ibm.png";
import microsoft from "../assets/microsoft.png";

const TopCompanies = () => {
  return (
    <div className="container text-center my-5">
      <h4 className="mb-4">Top companies hiring now</h4>
      <div className="d-flex justify-content-between align-items-center my-5">
        <div className="company-logo mx-3">
          <img src={google} alt="Google" />
        </div>
        <div className="company-logo mx-3">
          <img src={microsoft} alt="Microsoft" />
        </div>
        <div className="company-logo mx-3">
          <img src={flipcart} alt="Flipkart" />
        </div>
        <div className="company-logo mx-3">
          <img src={youtube} alt="YouTube" />
        </div>
        <div className="company-logo mx-3">
          <img src={ibm} alt="IBM" />
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
