import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import video from "../../assets/videos/Our-story/our-story-original-1.mov";
import "../../css/OurStoryHome.css"; // Fixed path check

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import client logos
import c1 from "../../assets/images/Clients/client-1.png";
import c2 from "../../assets/images/Clients/client-2.png";
import c3 from "../../assets/images/Clients/client-3.png";
import c4 from "../../assets/images/Clients/client-4.png";
import c5 from "../../assets/images/Clients/client-5.png";
import c6 from "../../assets/images/Clients/client-6.png";
import c7 from "../../assets/images/Clients/client-7.png";
import c8 from "../../assets/images/Clients/client-8.png";
import c9 from "../../assets/images/Clients/client-9.png";
import c10 from "../../assets/images/Clients/client-10.png";
import c11 from "../../assets/images/Clients/client-11.png";
import c12 from "../../assets/images/Clients/client-12.png";
import c13 from "../../assets/images/Clients/client-13.png";
import c14 from "../../assets/images/Clients/client-14.png";
import c15 from "../../assets/images/Clients/client-15.png";
import c16 from "../../assets/images/Clients/client-16.png";
import c17 from "../../assets/images/Clients/client-17.png";
import c18 from "../../assets/images/Clients/client-18.png";
import c19 from "../../assets/images/Clients/client-19.png";
import c20 from "../../assets/images/Clients/client-20.png";
import c21 from "../../assets/images/Clients/client-21.png";
import c22 from "../../assets/images/Clients/client-22.png";
import c23 from "../../assets/images/Clients/client-23.png";
import c24 from "../../assets/images/Clients/client-24.png";
import c25 from "../../assets/images/Clients/client-25.png";
import c26 from "../../assets/images/Clients/client-26.png";
import c27 from "../../assets/images/Clients/client-27.png";
import c28 from "../../assets/images/Clients/client-28.png";
import c29 from "../../assets/images/Clients/client-29.png";
import c30 from "../../assets/images/Clients/client-30.png";
import c31 from "../../assets/images/Clients/client-31.png";
import c32 from "../../assets/images/Clients/client-32.png";
import c33 from "../../assets/images/Clients/client-33.png";
import c34 from "../../assets/images/Clients/client-34.png";
import c35 from "../../assets/images/Clients/client-35.png";
import c36 from "../../assets/images/Clients/client-36.png";
import c37 from "../../assets/images/Clients/client-37.png";
import c38 from "../../assets/images/Clients/client-38.png";
import c39 from "../../assets/images/Clients/client-39.png";
import c40 from "../../assets/images/Clients/client-40.png";
import c41 from "../../assets/images/Clients/client-41.png";
import c42 from "../../assets/images/Clients/client-42.png";
import c43 from "../../assets/images/Clients/client-43.png";
import c44 from "../../assets/images/Clients/client-44.png";
import c45 from "../../assets/images/Clients/client-45.png";

const clientLogos = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
  c34,
  c35,
  c36,
  c37,
  c38,
  c39,
  c40,
  c41,
  c42,
  c43,
  c44,
  c45,
];

const successStoriesData = [
  {
    number: "80+",
    title: "Success Stories",
    desc: "Digital products delivered with precision.",
  },
  {
    number: "17+",
    title: "Global Clients",
    desc: "Trusted by top brands worldwide.",
  },
  {
    number: "7+",
    title: "Expertise",
    desc: "Design + Dev Excellence in motion.",
  },
];

export default function OurStoryHomePage() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  return (
    <div className="our-story-home">
      <div className="our-story-main">
        {/* Left Section */}
        <div className="left-section">
          {/* Vertical Carousel Card - Now using Swiper */}
          <div className="success-stories-card">
            <div style={{ width: "100%", height: "100%" }}>
              <Swiper
                direction={"vertical"}
                modules={[Autoplay, Pagination, Mousewheel]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                mousewheel={true}
                loop={true}
                className="success-stories-swiper"
                onSlideChange={(swiper) =>
                  setCurrentStoryIndex(swiper.realIndex)
                }
              >
                {successStoriesData.map((story, index) => (
                  <SwiperSlide key={index}>
                    <div className="story-content">
                      <p className="head-text">{story.title}</p>
                      <h2 className="story-number">{story.number}</h2>
                      <p className="story-desc">{story.desc}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="carousel-indicators">
              <div className="indicator-line"></div>
              <span className="indicator-number">{currentStoryIndex + 1}</span>
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section">
            <video src={video} autoPlay loop muted playsInline></video>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="right-section">
          <h2 className="head-text-white">Our Story</h2>
          <p className="para-text-white">
            We're a purpose-led crew of dreamers and doers — driven by design,
            obsessed with building what actually matters. Born into a world full
            of digital noise, we chose clarity.
          </p>
          <p className="para-text-white">
            We craft meaningful experiences, digital products, and partnerships
            that don't just look good; they move the needle.
          </p>

          <a href="/about" className="white-bg-btn">
            About US <GoArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>

      {/* Bottom Section - Logos */}
      <div className="recognitions-section">
        <h3 className="head-text" style={{ textAlign: "center" }}>
          Collaborating with 50+ Industry Leaders
        </h3>

        <div className="recognitions-carousel">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000} // Smooth continuous effect
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="recognitions-swiper"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="recognition-item">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="recognition-logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
