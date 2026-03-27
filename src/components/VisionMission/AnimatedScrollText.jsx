import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './VisionMission.module.css';

/**
 * Individual Character Component to safely use Hooks per letter.
 */
const AnimatedChar = ({ char, start, end, progress }) => {
  // We fade both opacity and color for a better visual effect
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(progress, [start, end], ["#bbb", "#000"]);
  
  return (
    <motion.span style={{ opacity, color }} className={styles["char-span"]}>
      {char}
    </motion.span>
  );
};

export const AnimatedScrollText = ({ text }) => {
  const containerRef = useRef(null);
  
  // Use the text container itself as the trigger for better precision
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"], // Start when text is near bottom, finish when mid-top
  });

  const words = text.split(" ");
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={styles["vm-animated-text"]}>
      {words.map((word, wordIndex) => {
        // Calculate the starting index of this word relative to the whole text
        // (Length of previous words + number of spaces)
        const prevWords = words.slice(0, wordIndex);
        const prevChars = prevWords.join("").length + prevWords.length;

        return (
          <span key={wordIndex} className={styles["word-wrapper"]}>
            {word.split("").map((char, charIndex) => {
              const charPosition = prevChars + charIndex;
              // Add a slight stagger/overlap by spreading the range
              const start = Math.max(0, (charPosition / totalChars) - 0.05);
              const end = Math.min(1, (charPosition / totalChars) + 0.05);

              return (
                <AnimatedChar 
                  key={charIndex} 
                  char={char} 
                  start={start} 
                  end={end} 
                  progress={scrollYProgress} 
                />
              );
            })}
            {/* Add a space after every word to prevent text collapse */}
            {wordIndex !== words.length - 1 && (
              <span className={styles["char-span"]} style={{opacity: 0.2}}>&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
};
