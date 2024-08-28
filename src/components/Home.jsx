import Hero from "./Hero";
import FeaturedJobs from "./FeaturedJobs";
import TopCompanies from "./TopCompanies";

function Home({ jobsData }) {
  return (
    <>
      <Hero></Hero>
      <FeaturedJobs jobsData={jobsData}></FeaturedJobs>
      <TopCompanies></TopCompanies>
    </>
  );
}

export default Home;
