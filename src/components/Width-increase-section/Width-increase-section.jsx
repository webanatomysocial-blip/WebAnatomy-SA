import styles from "./Width-increase-section.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once (outside the component is fine if imported in multiple places)
gsap.registerPlugin(ScrollTrigger);

export default function WidthIncreaseSection({ bgImage }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        width: "100%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 1,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "80% 30%",
          end: "bottom 30%",
          scrub: 1,
          // markers: true,
        },
      });
    }, sectionRef); // Scope to the section for easy cleanup

    return () => ctx.revert(); // Cleanup on unmount
  }, []); // Empty dependency array — run once on mount

  return (
    <section ref={sectionRef} className={styles['wa-width-increase-section']}>
      <div
        ref={contentRef}
        className={styles['wa-width-increase-content']}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div
        className={styles['wa-width-increase-overlay']}
        style={{
          opacity: 0,
          backgroundColor: "black",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        ref={overlayRef}
      ></div>
    </section>
  );
}
