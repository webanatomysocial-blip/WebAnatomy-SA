import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import video from "../../assets/videos/Our-story/our-story-original-1.mov";
import "../../css/OurStoryHome.css"; // Fixed path check

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import recognition logos
import img1 from "../../assets/images/Recognitions/1.png";
import img2 from "../../assets/images/Recognitions/2.png";
import img3 from "../../assets/images/Recognitions/3.png";
import img4 from "../../assets/images/Recognitions/4.png";
import img5 from "../../assets/images/Recognitions/5.png";
import img6 from "../../assets/images/Recognitions/6.png";
import img7 from "../../assets/images/Recognitions/7.webp";
import img8 from "../../assets/images/Recognitions/8.png";
import img9 from "../../assets/images/Recognitions/9.jpeg";
import img10 from "../../assets/images/Recognitions/10.png";

const recognitionLogos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const successStoriesData = [
  { number: "80+", title: "Success Stories", desc: "Digital products delivered with precision." },
  { number: "17+", title: "Global Clients", desc: "Trusted by top brands worldwide." },
  { number: "7+", title: "Expertise", desc: "Design + Dev Excellence in motion." },
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
        <h3 className="head-text" style={{ textAlign: "center" }}>Collaborating with 50+ Industry Leaders</h3>

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
                slidesPerView: 6,
              },
            }}
            className="recognitions-swiper"
          >
            {recognitionLogos.map((logo, index) => (
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
