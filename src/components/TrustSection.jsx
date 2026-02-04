import React from "react";
import { GoArrowRight } from "react-icons/go";
import "../css/TrustSection.css";

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        {/* Left Content */}
        <div className="trust-content">
          <h2 className="head-text">You Will Like It Here!</h2>
          <p className="sub-para-text">
            Ensure that your brand is consistent on every single touch point
            through an intuitive visual strategy
          </p>
          <a href="/opportunities" className="trust-btn">
            Explore opportunities <GoArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Right Content - Phone Mockup with Video */}
        <div className="trust-visuals">
          <div className="phone-screen">
            {/* Video Player */}
            <video
              src="https://wa.ctsi.in/wp-content/uploads/2025/03/Untitled-design.mp4"
              className="screen-video"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
