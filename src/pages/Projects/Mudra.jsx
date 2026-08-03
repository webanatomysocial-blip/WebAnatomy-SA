import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import styles from "./Mudra.module.css";

import img0 from "../../assets/projects/mudra/mudra-00.jpg";
import img1 from "../../assets/projects/mudra/mudra-01.png";
import img2 from "../../assets/projects/mudra/mudra-02.gif";
import img3 from "../../assets/projects/mudra/mudra-03.gif";
import img4 from "../../assets/projects/mudra/mudra-04.png";
import img5 from "../../assets/projects/mudra/mudra-05.png";
import img6 from "../../assets/projects/mudra/mudra-06.png";
import img7 from "../../assets/projects/mudra/mudra-07.png";
import img8 from "../../assets/projects/mudra/mudra-08.png";
import img9 from "../../assets/projects/mudra/mudra-09.jpg";
import img10 from "../../assets/projects/mudra/mudra-10.gif";

const mudraImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

gsap.registerPlugin(ScrollTrigger);

export default function Mudra() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <>
      <SEO
        title="Mudra Yoga Digital Branding | Web Axis Projects"
        description="Explore our digital branding and visual design work for Mudra Yoga."
      />
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
    </>
  );
}
