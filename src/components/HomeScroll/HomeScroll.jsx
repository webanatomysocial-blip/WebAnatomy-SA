import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HomeScroll.module.css";

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      // SECTION 1
      tl.to(`.${styles['wa-main-text']} span`, {
        x: 30,
        stagger: 0.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });

      tl.to(
        `.${styles.videoone}`,
        {
          left: "45%",
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      tl.to(
        [`.${styles['wa-content']} .${styles.line}`, `.${styles['wa-content']} .${styles['wa-button']}`],
        {
          y: -30,
          stagger: 0.4,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        "<2"
      );

      // TRANSITION 1 -> 2
      tl.to(`.${styles['animation-section']}`, {
        opacity: 0,
        duration: 2,
        pointerEvents: "none",
      });

      tl.to(
        `.${styles['animation-section-2']}`,
        {
          opacity: 1,
          duration: 2,
          pointerEvents: "auto",
          zIndex: 2,
        },
        "<"
      );

      // SECTION 2
      tl.to(`.${styles['wa-main-text-2']} span`, {
        x: -30,
        stagger: 0.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });

      tl.to(
        `.${styles.videotwo}`,
        {
          left: "30%",
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      tl.to(
        [`.${styles['wa-content-2']} .${styles['line-2']}`, `.${styles['wa-content-2']} .${styles['wa-button-2']}`],
        {
          y: -30,
          stagger: 0.4,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        "<2"
      );

      // TRANSITION 2 -> 3
      tl.to(`.${styles['animation-section-2']}`, {
        opacity: 0,
        duration: 2,
        pointerEvents: "none",
      });

      tl.to(
        `.${styles['animation-section-3']}`,
        {
          opacity: 1,
          duration: 2,
          pointerEvents: "auto",
          zIndex: 3,
        },
        "<"
      );

      // SECTION 3
      tl.to(`.${styles['wa-main-text-3']} span`, {
        x: 30,
        stagger: 0.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });

      tl.to(
        `.${styles.videothree}`,
        {
          left: "50%",
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "<"
      );

      tl.to(
        [`.${styles['wa-content-3']} .${styles['line-3']}`, `.${styles['wa-content-3']} .${styles['wa-button-3']}`],
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
    <div ref={containerRef} className={styles['home-scroll-pin-wrapper']}>
      {/* SECTION 1 */}
      <section className={styles['animation-section']}>
        <div className={styles['outer-container']}>
          <div className={styles['inner-container']}>
            <div className={styles['inner-inner-container']}>
              <video
                className={styles.videoone}
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/neon-glass-object-looped-animation-2025-03-21-19-40-13-utc.mp4"
                autoPlay
                loop
                muted
              />
              <div className={styles['wa-main-text']}>
                <span>D</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span>
                <br />
                <div style={{ marginBottom: "-20px" }}></div>
                <span>T</span><span>h</span><span>a</span><span>t</span><span> </span><span>T</span><span>h</span><span>i</span><span>n</span><span>k</span><span>s</span>
              </div>
              <div className={styles['wa-content']}>
                <p>
                  <span className={styles.line}>Great design isn’t just pretty it’s purposeful.</span>
                  <br />
                  <span className={styles.line}>we’re not just about crafting brands;</span>
                  <br />
                  <span className={styles.line}>we’re about creating experiences.</span>
                </p>
                <a href="/about" className={styles['wa-button']}>
                  About Us
                  <AboutUsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles['animation-section-2']}>
        <div className={styles['outer-container-2']}>
          <div className={styles['inner-container-2']}>
            <div className={styles['inner-inner-container-2']}>
              <video
                className={styles.videotwo}
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/abstract-liquid-shape-animation-loop-2023-11-27-05-28-53-utc-1.mov"
                autoPlay
                loop
                muted
              />
              <div className={styles['wa-main-text-2']}>
                <span>B</span><span>u</span><span>i</span><span>l</span><span>d</span>
                <br />
                <div style={{ marginBottom: "-30px" }}></div>
                <span>W</span><span>h</span><span>a</span><span>t</span><span>’</span><span>s</span><span> </span><span>N</span><span>e</span><span>x</span><span>t</span>
              </div>
              <div className={styles['wa-content-2']}>
                <p>
                  <span className={styles['line-2']}>Adopting cutting-edge </span>
                  <br />
                  <span className={styles['line-2']}>technologies for your enterprise,</span>
                  <br />
                  <span className={styles['line-2']}>Creating endless possibilities</span>
                </p>
                <a href="/about" className={styles['wa-button-2']}>
                  About Us
                  <AboutUsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className={styles['animation-section-3']}>
        <div className={styles['outer-container-3']}>
          <div className={styles['inner-container-3']}>
            <div className={styles['inner-inner-container-3']}>
              <video
                className={styles.videothree}
                src="https://wa.ctsi.in/wp-content/uploads/2025/05/abstract-glass-rectangles-looped-animation-2023-11-27-05-27-10-utc-1-1.mov"
                autoPlay
                loop
                muted
              />
              <div className={styles['wa-main-text-3']}>
                <span>M</span><span>a</span><span>r</span><span>k</span><span>e</span><span>t</span>
                <br />
                <div style={{ marginBottom: "-30px" }}></div>
                <span>&</span><span> </span><span>S</span><span>c</span><span>a</span><span>l</span><span>e</span>
              </div>
              <div className={styles['wa-content-3']}>
                <p>
                  <span className={styles['line-3']}>Intelligent design is the essence of nature;</span>
                  <br />
                  <span className={styles['line-3']}>that's our inspiration in crafting</span>
                  <br />
                  <span className={styles['line-3']}>tomorrow's tech realm</span>
                </p>
                <a href="/about" className={styles['wa-button-3']}>
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
