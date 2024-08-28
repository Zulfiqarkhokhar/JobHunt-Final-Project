import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { jobs } from "./jobs";
import JobSearch from "./components/JobSearch";
import PostJob from "./components/PostJob";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ApplyPage from "./components/ApplyPage";

function App() {
  const [jobsData, setJobsData] = useState(jobs);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Router>
        {isLogin ? (
          <div>
            <Navbar></Navbar>
            <div>
              <Routes>
                <Route path="/" element={<Home jobsData={jobsData} />} />
                <Route
                  path="/findJobs"
                  element={<JobSearch jobsData={jobsData} />}
                />
                <Route
                  path="/postJobs"
                  element={
                    <PostJob jobsData={jobsData} setJobsData={setJobsData} />
                  }
                />
                <Route path="/apply" element={<ApplyPage />} />
              </Routes>
            </div>
            <Footer></Footer>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
