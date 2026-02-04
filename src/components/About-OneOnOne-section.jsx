import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/About-OneOnOne-section.css";
import video from "../assets/videos/Our-story/our-story-original-1.mov";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOneOnOneSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  // Refs for the individual items
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current;
      if (!items || items.length === 0) return;

      // 1. Set initial states
      // Item 0: Visible, in place
      gsap.set(items[0], { yPercent: 0, opacity: 1 });

      // Other items: Below, hidden
      gsap.set(items.slice(1), { yPercent: 100, opacity: 0 });

      // 2. Create Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
          // markers: true,
        },
      });

      // 3. Sequence
      // For each item (except the last one), animate it out and the next one in
      items.forEach((item, index) => {
        if (index < items.length - 1) {
          const nextItem = items[index + 1];

          // Add a "step" to the timeline
          tl.to(item, {
            yPercent: -100, // Move current up
            opacity: 0, // Fade out
            duration: 1,
            ease: "power2.inOut",
          }).to(
            nextItem,
            {
              yPercent: 0, // Move next up (from 100 to 0)
              opacity: 1, // Fade in
              duration: 1,
              ease: "power2.inOut",
            },
            "<"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to add ref
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  // Clear refs on render to avoid duplicates in strict mode/re-renders
  itemsRef.current = [];

  return (
    <>
      <section ref={sectionRef} className="wa-about-one-on-one-section">
        <div className="wa-about-one-on-one-total-sticky-container">
          {/* <video
            src={video}
            autoPlay
            loop
            muted
            className="wa-about-one-on-one-video"
          ></video> */}
          <div className="wa-about-one-on-one-left-outer-container">
            <p className="head-text-white">
              Big Dreams, <br /> Bigger Numbers
            </p>
            <p className="para-text-white">
              We are moving ahead with relentless energy to achieve amazing
              results that speak volumes. We don't intend to slow down either!
            </p>
          </div>

          <div className="wa-about-one-on-one-right-outer-container">
            <div
              ref={containerRef}
              className="wa-about-one-on-one-right-inner-transparent-container"
            >
              {/* Item 1 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <p className="big-head-text-white">800+</p>
                <p className="para-text-white">We are moving ahead</p>
              </div>

              {/* Item 2 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <p className="big-head-text-white">900+</p>
                <p className="para-text-white">We are moving ahead</p>
              </div>

              {/* Item 3 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <p className="big-head-text-white">1000+</p>
                <p className="para-text-white">We are moving ahead</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
