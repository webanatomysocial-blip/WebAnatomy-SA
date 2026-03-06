import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedHeading.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedHeading – renders a heading whose words animate in one-by-one.
 */
export default function AnimatedHeading({
  text = "",
  tag: Tag = "h2",
  className = "",
  stagger = 0.08,
  duration = 0.6,
  triggerStart = "top 85%",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const wordsTarget = `.${styles['ah-word']}`;
    const words = ref.current.querySelectorAll(wordsTarget);
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, stagger, duration, triggerStart]);

  // Split on "|" for line breaks, then split each segment into words
  const lines = text.split("|");

  return (
    <Tag ref={ref} className={`${styles['animated-heading']} ${className}`}>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          {lineIdx > 0 && <br />}
          {line
            .trim()
            .split(/\s+/)
            .map((word, wordIdx) => (
              <span key={`${lineIdx}-${wordIdx}`} className={styles['ah-word']}>
                {word}&nbsp;
              </span>
            ))}
        </React.Fragment>
      ))}
    </Tag>
  );
}
