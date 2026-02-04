import {
  GoCommentDiscussion,
  GoPerson,
  GoMail,
  GoDeviceMobile,
  GoArrowRight,
} from "react-icons/go";
import "../css/About.css";
import WidthIncreaseSection from "../components/Width-increase-section";
import banner from "../assets/images/Home-images/banner-images/1.webp";
import AboutOneOnOneSection from "../components/About-OneOnOne-section";
import AboutPageOurStory from "../components/AboutPageOurStory";
import TrustSection from "../components/TrustSection";
import Insights from "../components/Insights";

const About = () => {
  return (
    <>
      <section className="wa-about-hero-section">
        <div className="wa-about-hero-bg" />
        <div className="wa-about-hero-overlay">
          <div className="wa-about-hero-content">
            <h1 className="wa-about-hero-title">About</h1>
          </div>
        </div>
      </section>

      <section className="wa-global-impact-about-page">
        <div className="wa-global-impact-title sub-para-text">
          Global Impact
        </div>
        <div className="wa-global-impact-content-wrapper head-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          alias et atque tempora?
        </div>
      </section>

      <WidthIncreaseSection bgImage={banner} />

      <AboutOneOnOneSection />

      <AboutPageOurStory />

      <section className="about-headingcolor-change-section">
        <div className="about-headingcolor-change-section-title">
          <span className="head-text-white gradient-span span-1">Design. </span>
          <span className="head-text-white gradient-span span-2">Build.</span>
          <span className="head-text-white gradient-span span-3">Market.</span>
        </div>

        <p className="para-text-white">
          It’s in our DNA to transform your brand into its best digital self. We
          are driven by a customer centric approach in creating engaging,
          interactive and immersive experiences that deliver only the best.
        </p>

        <a href="/about" className="black-bg-btn">
          About Us <GoArrowRight className="arrow-icon" />
        </a>
      </section>

      {/* <section className="wa-contact-info">
        <div className="wa-contact-container">
          <h2 className="wa-info-heading">Contact Us</h2>
          <p className="wa-info-subtext">
            Shoot anything that pops up in your head. From artificial
            intelligence to fun memes, we are all ears!
          </p>

          <div className="wa-info-grid">
           
            <div className="wa-location-box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Charminar-Pride_of_Hyderabad.jpg"
                alt="India"
              />
              <div className="wa-location-meta">
                <strong>🇮🇳 INDIA</strong>
                <p>
                  2nd Floor, Vision Arcade, 202, Jai Hind Gandhi Rd, Cyber Hills
                  Colony, VIP Hills, Madhapur, Hyderabad, Telangana 500081.
                </p>
                <a href="https://maps.google.com">Google Maps</a>
              </div>
            </div>

           
            <div>
              <div className="wa-info-cards">
                <InfoCard
                  icon={<GoCommentDiscussion />}
                  title="General Enquiry"
                  value="+91 9705030977"
                />
                <InfoCard
                  icon={<GoPerson />}
                  title="Sales Enquiry"
                  value="+91 9705030977"
                />
                <InfoCard
                  icon={<GoMail />}
                  title="Email"
                  value="info@webanatomy.in"
                />
                <InfoCard
                  icon={<GoDeviceMobile />}
                  title="HR Enquiry"
                  value="+91 9705030977"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <TrustSection />
      <Insights />
    </>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="wa-info-card">
    <div className="wa-info-icon">{icon}</div>
    <div>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  </div>
);

export default About;
