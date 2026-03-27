import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Agil.module.css";

const agilImages = [
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-01-min.png", // Identity Plate
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-02-min.png", // Logo Breakdown
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-07-min.png", // Typography
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-03-min.png", // Card Mockups
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-05-min.png", // Color Palette
  "https://webanatomy.in/wp-content/uploads/2024/07/Free_Stationery_Mockup_1-min.png", // Stationery
  "https://webanatomy.in/wp-content/uploads/2024/07/Agil-1-06-min.png", // Mobile Interface
  "https://webanatomy.in/wp-content/uploads/2024/07/fe2286aa-e740-43d4-91ed-3e31088a5993-min.png", // Lifestyle
  "https://webanatomy.in/wp-content/uploads/2024/07/T-shrit-min.png", // T-shirt
];

gsap.registerPlugin(ScrollTrigger);

export default function Agil() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgContainers = containerRef.current.querySelectorAll(`.${styles.imageContainer}`);
      
      imgContainers.forEach((container) => {
        gsap.fromTo(
          container,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.agilPage} ref={containerRef}>
      {agilImages.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={src} alt={`Agil Branding ${index + 1}`} className={styles.fullWidthImg} />
        </div>
      ))}
    </div>
  );
}
