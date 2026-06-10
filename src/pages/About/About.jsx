import HomeTextFade from "../../components/HomeTextFade/HomeTextFade.jsx";
import useCanonical from "../../hooks/useCanonical";
import SEO from "../../components/SEO/SEO";
import AboutOneOnOneSection from "../../components/About-OneOnOne-section/About-OneOnOne-section";
import AboutOurStory from "../../components/AboutOurStory/AboutOurStory.jsx";
import VisionMission from "../../components/VisionMission/VisionMission.jsx";
import Approach from "../../components/Approach/Approach.jsx";
import Pers from "../../components/Perspective/Perspective.jsx";
import Recognised from "../../components/Recognised/Recognised.jsx";
import AboutRecognitions from "../../components/AboutRecognitions/AboutRecognitions.jsx";

const About = () => {
  useCanonical();
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Web Axis",
      "url": "https://webaxis.co.za/about",
      "description": "Learn more about Web Axis and our expertise in digital marketing, SEO, web development, and branding."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://webaxis.co.za/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://webaxis.co.za/about"
        }
      ]
    }
  ];

  return (
    <>
    <SEO title="About Web Axis | Leading Digital Marketing Company in SA" description="Discover the team behind Web Axis. We help businesses achieve online growth through innovative digital marketing, SEO, web development, and branding services." schema={schema} />
    <HomeTextFade />
      <AboutOurStory />

   

      {/* AboutOneOnOneSection and VisionMission have internal animations, no AnimatedContent wrapper */}
      <AboutOneOnOneSection />
      
      <VisionMission />

      <Approach />

      <Pers />

      <Recognised />
      <AboutRecognitions />
    </>
  );
};

export default About;
