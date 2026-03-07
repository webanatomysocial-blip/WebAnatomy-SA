// src/components/HomeTextFade.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HomeTextFade.module.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 5%",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    // Animate ALL spans from gray to white, staggered
    tl.to(`.${styles['char-span']}`, {
      color: "white",
      duration: 1,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const text = `We believe in a world where technology
amplifies every experience you have
seamlessly, meaningfully, and beautifully.
And our mission is to imagine the possibilities.`;

  const lines = text.split("\n");

  return (
    <section className={styles['Text-Section']} ref={sectionRef}>
      <div className={styles['text-container']}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className={styles.line}>
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className={styles['word-span']}>
                {word.split("").map((char, charIndex) => {
                  // Total index for character-based stagger in GSAP
                  const absoluteCharIndex = line.substring(0, line.indexOf(word) + charIndex).length;
                  
                  // Hide the final period visually
                  const isLastPeriod =
                    lineIndex === lines.length - 1 &&
                    wordIndex === line.split(" ").length - 1 &&
                    charIndex === word.length - 1 &&
                    char === ".";

                  return (
                    <span
                      key={charIndex}
                      className={`${styles['char-span']} ${isLastPeriod ? styles.visi : ""}`}
                    >
                      {char}
                    </span>
                  );
                })}
                {/* Add space after word if it's not the last word */}
                {wordIndex < line.split(" ").length - 1 && (
                  <span className={styles.space}>&nbsp;</span>
                )}
              </span>
            ))}
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTextFade;
