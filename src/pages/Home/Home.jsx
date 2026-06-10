// src/pages/Home/Home.jsx
import useCanonical from "../../hooks/useCanonical";
import SEO from "../../components/SEO/SEO";
import HomeCarosule from "../../components/HomeCarosule/HomeCarosule.jsx";
import FullFunnelServices from "../../components/FullFunnelServices/FullFunnelServices.jsx";
// import OurStory from "../../components/OurStory/OurStory.jsx";
import OurStoryHomePage from "../../components/OurStoryHomePage/OurStoryHomePage.jsx";

import RecentProjects from "../../components/RecentProjects/RecentProjects.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import ClientsDifference from "../../components/ClientsDifference/ClientsDifference.jsx";

export default function Home() {
  useCanonical();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Axis",
    "url": "https://webaxis.co.za/",
    "logo": "https://webaxis.co.za/logo.png",
    "description": "Digital marketing, SEO, web development, branding and business growth solutions in South Africa."
  };

  return (
    <>
      <SEO title="Best Digital Marketing Company in South Africa | Web Axis" description="Partner with Web Axis for expert digital marketing, SEO, web development, eCommerce solutions, and online growth strategies tailored to your business goals." schema={schema} />
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
