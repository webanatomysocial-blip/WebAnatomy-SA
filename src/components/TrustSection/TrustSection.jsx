import React from "react";
import { GoArrowRight } from "react-icons/go";
import styles from "./TrustSection.module.css";

export default function TrustSection() {
  return (
    <section className={styles['trust-section']}>
      <div className={styles['trust-container']}>
        {/* Left Content */}
        <div className={styles['trust-content']}>
          <h2 className={styles['head-text']}>You Will Like It Here!</h2>
          <p className={styles['sub-para-text']}>
            Ensure that your brand is consistent on every single touch point
            through an intuitive visual strategy
          </p>
          <a href="/opportunities" className={styles['trust-btn']}>
            Explore opportunities <GoArrowRight className={styles['arrow-icon']} />
          </a>
        </div>

        {/* Right Content - Phone Mockup with Video */}
        <div className={styles['trust-visuals']}>
          <div className={styles['phone-screen']}>
            {/* Video Player */}
            <video
              src="https://wa.ctsi.in/wp-content/uploads/2025/03/Untitled-design.mp4"
              className={styles['screen-video']}
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
