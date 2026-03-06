// src/components/OurStory.jsx

import React from "react";
import styles from "./OurStory.module.css";
import video from "../../assets/videos/Our-story/our-story-original-1.mov";
import { GoArrowRight } from "react-icons/go";

export default function OurStory() {
  return (
    <>
      <div className={styles['our-story']}>
        <div className={styles['our-story-content']}>
          <h2 className={styles['head-text-white']}>Our Story</h2>
          <p className={styles['para-text-white']}>
            We're a purpose-led crew of dreamers and doers — driven by design,
            obsessed with building what actually matters. Born into a world full
            of digital noise, we chose clarity.
            <br />
            <br />
            We craft meaningful experiences, digital products, and partnerships
            that don't just look good; they move the needle.
          </p>

          <div className={styles['stats-grid']}>
            <div className={styles['stat-box']}>
              <h3 className={styles['sub-head-text-white']}>80+</h3>
              <p className={styles['sub-para-text-white']}>Success Stories</p>
            </div>
            <div className={styles['stat-box']}>
              <h3 className={styles['sub-head-text-white']}>17+</h3>
              <p className={styles['sub-para-text-white']}>Global Clients</p>
            </div>
            <div className={styles['stat-box']}>
              <h3 className={styles['sub-head-text-white']}>7+</h3>
              <p className={styles['sub-para-text-white']}>Design + Dev Expertise</p>
            </div>
            <div className={styles['stat-box']}>
              <h3 className={styles['sub-head-text-white']}>5+</h3>
              <p className={styles['sub-para-text-white']}>Inhouse Digital Products</p>
            </div>
          </div>

          <a href="/about" className={styles['black-bg-btn']}>
            About Us <GoArrowRight className={styles['arrow-icon']} />
          </a>
        </div>
        {/* Placeholder for the right side image/graphic */}
        <div className={styles['our-story-visuals']}>
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
}
