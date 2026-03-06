import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./VisionMission.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedScrollText — renders text word-by-word, each word fading in
 * from gray to dark as the user scrolls through the parent card.
 */
export function AnimatedScrollText({ text, triggerRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const spans = containerRef.current?.querySelectorAll(`.${styles["char-span"]}`);
    if (!spans || spans.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef?.current || containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.8,
      },
    });

    tl.to(spans, {
      color: "#111",
      stagger: 0.05,
      ease: "none",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={styles["vm-animated-text"]}>
      {words.map((word, i) => (
        <span key={i} className={styles["char-span"]}>
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}
