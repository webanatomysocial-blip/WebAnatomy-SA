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
            {line.split("").map((char, charIndex) => {
              if (char === " ") {
                return <span key={charIndex} className={styles.space} />;
              }

              // Hide the final period visually
              const isLastPeriod =
                lineIndex === lines.length - 1 &&
                charIndex === line.length - 2 &&
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
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTextFade;
