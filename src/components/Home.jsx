import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedJobs from "./FeaturedJobs";
import TopCompanies from "./TopCompanies";
import Footer from "./Footer";
import JobSearch from "./JobSearch";
import { jobsData } from "../jobsData";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturedJobs jobsData={jobsData}></FeaturedJobs>
      <TopCompanies></TopCompanies>
      <Footer></Footer>
      <JobSearch jobsData={jobsData}></JobSearch>
    </>
  );
}

export default Home;
