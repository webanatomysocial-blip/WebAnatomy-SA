// src/pages/Home/Home.jsx

import HomeCarosule from "../../components/HomeCarosule/HomeCarosule.jsx";
import HomeTextFade from "../../components/HomeTextFade/HomeTextFade.jsx";
import HomeScroll from "../../components/HomeScroll/HomeScroll.jsx";
// import OurStory from "../../components/OurStory/OurStory.jsx";
import OurStoryHomePage from "../../components/OurStoryHomePage/OurStoryHomePage.jsx";
import FullFunnelServices from "../../components/FullFunnelServices/FullFunnelServices.jsx";
import BlogRoll from "../../components/BlogRoll/BlogRoll.jsx";
import RecentProjects from "../../components/RecentProjects/RecentProjects.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import ClientsDifference from "../../components/ClientsDifference/ClientsDifference.jsx";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

export default function Home() {
  const animProps = {
    distance: 150,
    direction: "vertical",
    reverse: false,
    duration: 1.2,
    ease: "power2.out",
    initialOpacity: 0.1,
    animateOpacity: true,
    threshold: 0.01,
    delay: 0.3,
  };

  return (
    <>
      <div id="transparent-header-wrapper">
        <HomeCarosule />
        <HomeTextFade />
        <HomeScroll />
      </div>

      <OurStoryHomePage />

      <FullFunnelServices />

      <RecentProjects />

      <FAQ />

      <ClientsDifference />

      <BlogRoll />
    </>
  );
}
