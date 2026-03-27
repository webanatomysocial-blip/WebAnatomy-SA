import HomeTextFade from "../../components/HomeTextFade/HomeTextFade.jsx";
import AboutOneOnOneSection from "../../components/About-OneOnOne-section/About-OneOnOne-section";
import AboutOurStory from "../../components/AboutOurStory/AboutOurStory.jsx";
import VisionMission from "../../components/VisionMission/VisionMission.jsx";
import Approach from "../../components/Approach/Approach.jsx";
import Pers from "../../components/Perspective/Perspective.jsx";
import Recognised from "../../components/Recognised/Recognised.jsx";
import AboutRecognitions from "../../components/AboutRecognitions/AboutRecognitions.jsx";

const About = () => {
  return (
    <>
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
