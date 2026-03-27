// src/pages/Home/Home.jsx

import HomeCarosule from "../../components/HomeCarosule/HomeCarosule.jsx";
import FullFunnelServices from "../../components/FullFunnelServices/FullFunnelServices.jsx";
// import OurStory from "../../components/OurStory/OurStory.jsx";
import OurStoryHomePage from "../../components/OurStoryHomePage/OurStoryHomePage.jsx";

import RecentProjects from "../../components/RecentProjects/RecentProjects.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import ClientsDifference from "../../components/ClientsDifference/ClientsDifference.jsx";

export default function Home() {
  return (
    <>
      <div id="transparent-header-wrapper">
        <HomeCarosule />
        <FullFunnelServices />
        <OurStoryHomePage />
      </div>

      

      <RecentProjects />

      <FAQ />

      <ClientsDifference />

    </>
  );
}
