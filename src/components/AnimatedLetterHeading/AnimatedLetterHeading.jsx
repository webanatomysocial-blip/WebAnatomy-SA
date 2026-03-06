import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedLetterHeading.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLetterHeading({
  text = "",
  tag: Tag = "h2",
  className = "",
  stagger = 0.05,
  duration = 0.5,
  triggerStart = "top 85%",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const lettersTarget = `.${styles['al-letter']}`;
    const letters = ref.current.querySelectorAll(lettersTarget);
    if (!letters.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
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

  const lines = text.split("|");

  return (
    <Tag ref={ref} className={`${styles['animated-letter-heading']} ${className}`}>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          {lineIdx > 0 && <br />}
          {line.split(" ").map((word, wordIdx) => (
            <span 
              key={`${lineIdx}-${wordIdx}`} 
              className={styles['al-word']} 
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIdx) => (
                <span 
                  key={`${lineIdx}-${wordIdx}-${charIdx}`} 
                  className={styles['al-letter']}
                >
                  {char}
                </span>
              ))}
              {/* Add a non-breaking space after each word except the last one in the line */}
              {wordIdx < line.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </React.Fragment>
      ))}
    </Tag>
  );
}
