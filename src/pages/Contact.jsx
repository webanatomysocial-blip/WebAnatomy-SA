import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  GoCommentDiscussion,
  GoPerson,
  GoMail,
  GoDeviceMobile,
} from "react-icons/go";
import "../css/Contact.css";

const Contact = () => {
  return (
    <>
      {/* ===============================
          SECTION 0 – HERO
      =============================== */}
      <section className="wa-contact-hero-section">
        <div className="wa-contact-hero-bg" />
        <div className="wa-contact-hero-overlay">
          <div className="wa-contact-hero-content">
            <h1 className="wa-contact-hero-title">Contact</h1>
          </div>
        </div>
      </section>

      {/* ===============================
          SECTION 1 – CONTACT FORM
      =============================== */}
      <section className="wa-contact-hero">
        <div className="wa-contact-container wa-contact-grid">
          {/* LEFT */}
          <div className="wa-contact-left">
            <h1 className="wa-contact-heading">Tell Us What’s on Your Mind?</h1>
            <p className="wa-contact-subtext">
              Shoot anything that pops up in your head. From artificial
              intelligence to fun memes, we are all ears!
            </p>
          </div>

          {/* RIGHT */}
          <div className="wa-contact-form-wrap">
            <form className="wa-contact-form">
              <div className="wa-form-row">
                <div className="wa-form-field">
                  <label>First Name*</label>
                  <input type="text" placeholder="Enter first name" />
                </div>
                <div className="wa-form-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>

              <div className="wa-form-row">
                <div className="wa-form-field">
                  <label>Email*</label>
                  <input type="email" placeholder="Enter email" />
                </div>
                <div className="wa-form-field">
                  <label>Phone Number*</label>
                  <input type="tel" placeholder="Enter your number" />
                </div>
              </div>

              <div className="wa-form-field">
                <label>Company Name</label>
                <input type="text" placeholder="Enter your company name" />
              </div>

              <div className="wa-form-field">
                <label>Tell Us More</label>
                <textarea placeholder="Brief about your project" />
              </div>

              <div className="wa-form-consent">
                <input type="checkbox" id="wa-policy" />
                <label htmlFor="wa-policy">
                  I have read the <a href="/privacy-policy">privacy policy</a>{" "}
                  and consent to the processing of my data
                </label>
              </div>

              <button className="wa-contact-submit">
                Send Enquiry <GoArrowRight className="arrow-icon" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===============================
          SECTION 2 – CONTACT INFO
      =============================== */}
      <section className="wa-contact-info">
        <div className="wa-contact-container">
          <h2 className="wa-info-heading">Contact Us</h2>
          <p className="wa-info-subtext">
            Shoot anything that pops up in your head. From artificial
            intelligence to fun memes, we are all ears!
          </p>

          <div className="wa-info-grid">
            {/* LEFT */}
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

            {/* RIGHT */}
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
      </section>
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

export default Contact;
