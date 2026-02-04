// src/Home.jsx

import HomeCarosule from "../components/HomeCarosule.jsx";
import HomeTextFade from "../components/HomeTextFade.jsx";
import HomeScroll from "../components/HomeScroll.jsx";
// import OurStory from "../components/OurStory.jsx";
import OurStoryHomePage from "../components/Our-story-home-page.jsx";
import OurServices from "../components/OurServices.jsx";
import ClientsImg from "../components/Clients-img.jsx";
import CaseStudies from "../components/Case-Studies.jsx";
// import TrustSection from "../components/TrustSection.jsx";
import Insights from "../components/Insights.jsx";

export default function Home() {
  return (
    <>
      <div id="transparent-header-wrapper">
        <HomeCarosule />
        <HomeTextFade />
        <HomeScroll />
      </div>
      <CaseStudies />
      {/* <OurStory /> */}
      <OurStoryHomePage />
      <OurServices />
      <ClientsImg />
      {/* <TrustSection /> */}
      <Insights />
    </>
  );
}
