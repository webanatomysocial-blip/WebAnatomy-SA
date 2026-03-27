import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";
import styles from "./Erynits.module.css";

// Import images
const images = [
  "https://webanatomy.in/wp-content/uploads/2025/07/b14197227528057.68427ce46f798.webp", // Hero
  "https://webanatomy.in/wp-content/uploads/2025/07/f8ed5f227528057.685bc272e63e1.webp",
  "https://webanatomy.in/wp-content/uploads/2025/07/ca55d0227528057.685bc04f37e90.webp",
  "https://webanatomy.in/wp-content/uploads/2025/07/8be785227528057.685b8ab114077.webp",
];

const splitImages = {
  left: "https://webanatomy.in/wp-content/uploads/2025/07/Untitled-design-17-1024x853.jpg",
  right: "https://webanatomy.in/wp-content/uploads/2025/07/c2bee1227528057.685bc1c38b489.webp"
};

const finalImages = [
  "https://webanatomy.in/wp-content/uploads/2025/07/894b47227528057.685bc306821f6.webp",
  "https://webanatomy.in/wp-content/uploads/2025/07/484a93227528057.685bc30681b74.webp"
];

gsap.registerPlugin(ScrollTrigger);

export default function Erynits() {
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

  const animProps = {
    distance: 100,
    direction: "vertical",
    reverse: false,
    duration: 1,
    ease: "power2.out",
    initialOpacity: 0,
    animateOpacity: true,
    threshold: 0.1,
  };

  return (
    <div className={styles.erynitsPage} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img src={images[0]} alt="Erynits Hero" className={styles.fullWidthImg} />
        </div>
      </section>

      {/* Main Image Stack */}
      <section className={styles.stackSection}>
        {images.slice(1).map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Erynits Branding ${index + 1}`} className={styles.fullWidthImg} />
          </div>
        ))}
      </section>

      {/* Split Section */}
      <section className={styles.splitSection}>
        <div className={styles.imageContainer}>
          <div className={styles.splitGrid}>
            <div className={styles.splitLeft}>
              <img src={splitImages.left} alt="Erynits Detail" className={styles.fullWidthImg} />
            </div>
            <div className={styles.splitRight}>
              <img src={splitImages.right} alt="Erynits Layout" className={styles.fullWidthImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Final Images */}
      <section className={styles.stackSection}>
        {finalImages.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Erynits Final ${index + 1}`} className={styles.fullWidthImg} />
          </div>
        ))}
      </section>
    </div>
  );
}
