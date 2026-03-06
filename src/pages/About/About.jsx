import AboutOneOnOneSection from "../../components/About-OneOnOne-section/About-OneOnOne-section";
import AboutOurStory from "../../components/AboutOurStory/AboutOurStory.jsx";
import VisionMission from "../../components/VisionMission/VisionMission.jsx";
import Approach from "../../components/Approach/Approach.jsx";
import Pers from "../../components/Perspective/Perspective.jsx";
import Recognised from "../../components/Recognised/Recognised.jsx";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

const About = () => {
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
      <AboutOurStory />

      {/* AboutOneOnOneSection and VisionMission have internal animations, no AnimatedContent wrapper */}
      <AboutOneOnOneSection />
      
      <VisionMission />

      <Approach />

      <Pers />

      <Recognised />
    </>
  );
};

export default About;
