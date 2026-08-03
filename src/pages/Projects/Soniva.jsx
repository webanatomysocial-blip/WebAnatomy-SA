import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import styles from "./Soniva.module.css";

import img1 from "../../assets/projects/soniva/Soniva-dental-02.png";
import img2 from "../../assets/projects/soniva/Soniva-dental-03.png";
import img3 from "../../assets/projects/soniva/Soniva-dental-04.png";
import img4 from "../../assets/projects/soniva/Soniva-dental-05.png";
import img5 from "../../assets/projects/soniva/Soniva-dental-06.png";

const sonivaImages = [img1, img2, img3, img4, img5];

gsap.registerPlugin(ScrollTrigger);

export default function Soniva() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const images = containerRef.current.querySelectorAll(`.${styles.imageContainer}`);
      
      images.forEach((img) => {
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
    <>
      <SEO
        title="Soniva Dental Branding Case Study | Web Axis Projects"
        description="Explore our digital services and brand presentation for Soniva Dental."
      />
      <div className={styles.sonivaPage} ref={containerRef}>
        {sonivaImages.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Soniva Dental Case Study Document ${index + 1}`} className={styles.fullWidthImg} />
          </div>
        ))}
      </div>
    </>
  );
}
