import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";
import styles from "./Erynits.module.css";

// Import local images
import img0 from "../../assets/projects/erynits/erynits-00.webp";
import img1 from "../../assets/projects/erynits/erynits-01.webp";
import img2 from "../../assets/projects/erynits/erynits-02.webp";
import img3 from "../../assets/projects/erynits/erynits-03.webp";
import splitLeft from "../../assets/projects/erynits/erynits-split-left.jpg";
import splitRight from "../../assets/projects/erynits/erynits-split-right.webp";
import final1 from "../../assets/projects/erynits/erynits-final-01.webp";
import final2 from "../../assets/projects/erynits/erynits-final-02.webp";

const images = [img0, img1, img2, img3];
const splitImages = { left: splitLeft, right: splitRight };
const finalImages = [final1, final2];

gsap.registerPlugin(ScrollTrigger);

export default function Erynits() {
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
        title="Erynits Branding Case Study | Web Axis Projects"
        description="Explore our branding and art exhibition design work for Erynits."
      />
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
    </>
  );
}
