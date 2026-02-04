import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/HomeScroll.css";

// SVG Icons (Cleaned up for React)
const AboutUsIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
  >
    <path
      d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
              c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
              l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
              c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
    />
  </svg>
);

const HomeScroll = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // MASTER TIMELINE
      // Use a single timeline scraped over the pinning distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Change to top top if you want it pinned immediately
          end: "+=3000", // Length of valid scroll
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      // ==========================================
      // SECTION 1 (Initially visible but animated in)
      // ==========================================

      // 1. Text Spans In
      tl.to(".wa-main-text span", {
        x: 30,
        stagger: 0.1, // Faster stagger
        opacity: 1,
        filter: "blur(0px)",
        duration: 1, // Relative duration in timeline
      });

      // 2. Video In (Moving from Left 40% -> 35%)
      tl.to(
        ".videoone",
        {
          left: "45%",
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      // 3. Content Lines In
      tl.to(
        [".wa-content .line", ".wa-content .wa-button"],
        {
          y: -30,
          stagger: 0.4,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        "<2"
      ); // Start a bit later

      // ==========================================
      // TRANSITION 1 -> 2
      // ==========================================

      // Fade out Section 1
      tl.to(".animation-section", {
        opacity: 0,
        duration: 2,
        pointerEvents: "none",
      });

      // Fade in Section 2 (and make visible)
      tl.to(
        ".animation-section-2",
        {
          opacity: 1,
          duration: 2,
          pointerEvents: "auto",
          zIndex: 2, // Bring to front
        },
        "<"
      ); // Overlap fade

      // ==========================================
      // SECTION 2 ANIMATION
      // ==========================================

      // 1. Text Spans In
      tl.to(".wa-main-text-2 span", {
        x: -30,
        stagger: 0.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });

      // 2. Video In (Scale Up + Move)
      tl.to(
        ".videotwo",
        {
          left: "30%", // Corrected from -25%
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      // 3. Content Lines In
      tl.to(
        [".wa-content-2 .line-2", ".wa-content-2 .wa-button-2"],
        {
          y: -30,
          stagger: 0.4,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        "<2"
      );

      // ==========================================
      // TRANSITION 2 -> 3
      // ==========================================

      tl.to(".animation-section-2", {
        opacity: 0,
        duration: 2,
        pointerEvents: "none",
      });

      tl.to(
        ".animation-section-3",
        {
          opacity: 1,
          duration: 2,
          pointerEvents: "auto",
          zIndex: 3,
        },
        "<"
      );

      // ==========================================
      // SECTION 3 ANIMATION
      // ==========================================

      // 1. Text Spans In
      tl.to(".wa-main-text-3 span", {
        x: 30,
        stagger: 0.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });

      // 2. Video In
      tl.to(
        ".videothree",
        {
          left: "50%",
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      // 3. Content Lines In
      tl.to(
        [".wa-content-3 .line-3", ".wa-content-3 .wa-button-3"],
        {
          y: -30,
          stagger: 0.4,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        "<2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="home-scroll-pin-wrapper">
      {/* SECTION 1 */}
      <section className="animation-section">
        <div className="outer-container">
          <div className="inner-container">
            <div className="inner-inner-container">
              <video
                className="videoone"
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/neon-glass-object-looped-animation-2025-03-21-19-40-13-utc.mp4"
                autoPlay
                loop
                muted
              />
              <div className="wa-main-text">
                <span>D</span>
                <span>e</span>
                <span>s</span>
                <span>i</span>
                <span>g</span>
                <span>n</span>
                <br />
                <div style={{ marginBottom: "-20px" }}></div>
                <span>T</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                {/* Space */}
                <span> </span>
                <span>T</span>
                <span>h</span>
                <span>i</span>
                <span>n</span>
                <span>k</span>
                <span>s</span>
              </div>
              <div className="wa-content">
                <p>
                  <span className="line">
                    Great design isn’t just pretty it’s purposeful.
                  </span>
                  <br />
                  <span className="line">
                    we’re not just about crafting brands;
                  </span>
                  <br />
                  <span className="line">
                    we’re about creating experiences.
                  </span>
                </p>
                <a href="/about" className="wa-button">
                  About Us
                  <AboutUsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="animation-section-2">
        <div className="outer-container-2">
          <div className="inner-container-2">
            <div className="inner-inner-container-2">
              <video
                className="videotwo"
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/abstract-liquid-shape-animation-loop-2023-11-27-05-28-53-utc-1.mov"
                autoPlay
                loop
                muted
              />
              <div className="wa-main-text-2">
                <span>B</span>
                <span>u</span>
                <span>i</span>
                <span>l</span>
                <span>d</span>
                <br />
                <div style={{ marginBottom: "-30px" }}></div>
                <span>W</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <span>’</span>
                <span>s</span>
                <span> </span>
                <span>N</span>
                <span>e</span>
                <span>x</span>
                <span>t</span>
              </div>
              <div className="wa-content-2">
                <p>
                  <span className="line-2">Adopting cutting-edge </span>
                  <br />
                  <span className="line-2">
                    technologies for your enterprise,
                  </span>
                  <br />
                  <span className="line-2">Creating endless possibilities</span>
                </p>
                <a href="/about" className="wa-button-2">
                  About Us
                  <AboutUsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="animation-section-3">
        <div className="outer-container-3">
          <div className="inner-container-3">
            <div className="inner-inner-container-3">
              <video
                className="videothree"
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/abstract-glass-rectangles-looped-animation-2023-11-27-05-27-10-utc-1-1.mov"
                autoPlay
                loop
                muted
              />
              <div className="wa-main-text-3">
                <span>M</span>
                <span>a</span>
                <span>r</span>
                <span>k</span>
                <span>e</span>
                <span>t</span>
                <br />
                <div style={{ marginBottom: "-30px" }}></div>
                <span>&</span>
                <span> </span>
                <span>S</span>
                <span>c</span>
                <span>a</span>
                <span>l</span>
                <span>e</span>
              </div>
              <div className="wa-content-3">
                <p>
                  <span className="line-3">
                    Intelligent design is the essence of nature;
                  </span>
                  <br />
                  <span className="line-3">
                    that's our inspiration in crafting
                  </span>
                  <br />
                  <span className="line-3">tomorrow's tech realm</span>
                </p>
                <a href="/about" className="wa-button-3">
                  About Us
                  <AboutUsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScroll;
