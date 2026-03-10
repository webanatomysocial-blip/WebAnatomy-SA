import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Soniva.module.css";

gsap.registerPlugin(ScrollTrigger);

const sonivaImages = [
  "https://webanatomy.in/wp-content/uploads/2024/07/Soniva-dental-02.png",
  "https://webanatomy.in/wp-content/uploads/2024/07/Soniva-dental-03.png",
  "https://webanatomy.in/wp-content/uploads/2024/07/Soniva-dental-04.png",
  "https://webanatomy.in/wp-content/uploads/2024/07/Soniva-dental-05.png",
  "https://webanatomy.in/wp-content/uploads/2024/07/Soniva-dental-06-883x1024.png",
];

export default function Soniva() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const images = containerRef.current.querySelectorAll(`.${styles.imageContainer}`);
      
      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
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
    <div className={styles.sonivaPage} ref={containerRef}>
      {sonivaImages.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={src} alt={`Soniva Dental Case Study Document ${index + 1}`} className={styles.fullWidthImg} />
        </div>
      ))}
    </div>
  );
}
