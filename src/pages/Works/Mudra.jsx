import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Mudra.module.css";

const mudraImages = [
  "https://webanatomy.in/wp-content/uploads/2024/06/dfda9f191867961.65d3260c64206-scaled.jpg", // 0: Main Showcase Header
  "https://webanatomy.in/wp-content/uploads/2024/06/ff73ef191867961.65d3260c65e8a.png", // 1: Typography & Color Palette
  "https://webanatomy.in/wp-content/uploads/2024/06/58de3f191867961.65d3260c62937.gif", // 2: Logo Animation 1
  "https://webanatomy.in/wp-content/uploads/2024/06/2d6f75191867961.65d3260c5f8f4.gif", // 3: Logo Animation 2
  "https://webanatomy.in/wp-content/uploads/2024/06/98be08191867961.65d3260c64f1d.png", // 4: Social Media Mockups
  "https://webanatomy.in/wp-content/uploads/2024/06/01b595191867961.65d3260c608dc.png", // 5: Business Cards
  "https://webanatomy.in/wp-content/uploads/2024/06/9e9847191867961.65d3260b9b257-1024x682.png", // 6: Office/Stationery
  "https://webanatomy.in/wp-content/uploads/2024/06/c36184191867961.65d3260b9a2f8-1024x682.png", // 7: Letterhead
  "https://webanatomy.in/wp-content/uploads/2024/06/e3eea3191867961.65d3260c619e0.png", // 8: Yoga Mat Mockups
  "https://webanatomy.in/wp-content/uploads/2024/06/2e9296191867961.65d3260c66d6a-scaled.jpg", // 9: Water Bottles & Swag
  "https://webanatomy.in/wp-content/uploads/2024/06/8c048a191867961.65d3260c635b4.gif", // 10: Web/Interactive Elements
];

gsap.registerPlugin(ScrollTrigger);

export default function Mudra() {
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
    <div className={styles.mudraPage} ref={containerRef}>
      {/* Images 0 to 5 */}
      {mudraImages.slice(0, 6).map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={src} alt={`Mudra Yoga Branding ${index + 1}`} className={styles.fullWidthImg} />
        </div>
      ))}

      {/* Side-by-side section: Images 6 and 7 */}
      <section className={styles.splitSection}>
        <div className={styles.imageContainer}>
          <div className={styles.splitGrid}>
            <div className={styles.splitLeft}>
              <img src={mudraImages[6]} alt="Mudra Yoga Stationery" className={styles.fullWidthImg} />
            </div>
            <div className={styles.splitRight}>
              <img src={mudraImages[7]} alt="Mudra Yoga Letterhead" className={styles.fullWidthImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Images 8 to 10 */}
      {mudraImages.slice(8).map((src, index) => (
        <div key={index + 8} className={styles.imageContainer}>
          <img src={src} alt={`Mudra Yoga Branding ${index + 9}`} className={styles.fullWidthImg} />
        </div>
      ))}
    </div>
  );
}
