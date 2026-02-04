// src/components/OurStory.jsx

import React from "react";
import "../css/OurStory.css";
import video from "../assets/videos/Our-story/our-story-original-1.mov";
import { GoArrowRight } from "react-icons/go";

export default function OurStory() {
  return (
    <>
      <div className="our-story">
        <div className="our-story-content">
          <h2 className="head-text-white">Our Story</h2>
          <p className="para-text-white">
            We're a purpose-led crew of dreamers and doers — driven by design,
            obsessed with building what actually matters. Born into a world full
            of digital noise, we chose clarity.
            <br />
            <br />
            We craft meaningful experiences, digital products, and partnerships
            that don't just look good; they move the needle.
          </p>

          <div className="stats-grid">
            <div className="stat-box">
              <h3 className="sub-head-text-white">80+</h3>
              <p className="sub-para-text-white">Success Stories</p>
            </div>
            <div className="stat-box">
              <h3 className="sub-head-text-white">17+</h3>
              <p className="sub-para-text-white">Global Clients</p>
            </div>
            <div className="stat-box">
              <h3 className="sub-head-text-white">7+</h3>
              <p className="sub-para-text-white">Design + Dev Expertise</p>
            </div>
            <div className="stat-box">
              <h3 className="sub-head-text-white">5+</h3>
              <p className="sub-para-text-white">Inhouse Digital Products</p>
            </div>
          </div>

          <a href="/about" className="black-bg-btn">
            About Us <GoArrowRight className="arrow-icon" />
          </a>
        </div>
        {/* Placeholder for the right side image/graphic */}
        <div className="our-story-visuals">
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
}
