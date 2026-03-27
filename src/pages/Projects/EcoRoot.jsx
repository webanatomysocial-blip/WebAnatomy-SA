import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import FAQ from "../../components/FAQ/FAQ";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./EcoRoot.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function EcoRoot() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Reveal animations for images
      const images = containerRef.current.querySelectorAll(
        `.${styles.revealImage}`,
      );
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.ecoRootPage} ref={containerRef}>
      {/* 1. Hero Image - Full Width */}
      <section className={styles.heroSection}>
        <img
          src="https://webanatomy.in/wp-content/uploads/2024/06/Fence_Billboard_Mockup_3-scaled.jpg"
          alt="Eco Root Billboard Mockup"
          className={`${styles.fullWidthImg} ${styles.revealImage}`}
        />
      </section>

      {/* 2. Introduction Text - Full Width with Container */}
      <section className={styles.introSection}>
        <div className={styles.textContainer}>
          <AnimatedLetterHeading
            text="Introduction"
            tag="h2"
            className={styles.sectionTitle}
          />
          <div className={`${styles.sectionText} ${styles.revealImage}`}>
            Eco Root’s logo is a visual narrative of ancestral wisdom meeting
            modern sustainability, embodied in intertwining roots symbolizing
            harmony between tradition and innovation. Representing a commitment
            to eco-friendly solutions derived from plants, the logo is a concise
            story of evolution and resilience, balancing the roots of the past
            with the demands of today’s eco-conscious world.
          </div>
        </div>
      </section>

      {/* 3. Logo Showcase - Boxed Container */}
      <section className={styles.logoShowcase}>
        <div className={styles.boxedContainer}>
          <img
            src="https://webanatomy.in/wp-content/uploads/2024/05/Logo-introduction-01-scaled-1-1024x411.jpg"
            alt="Eco Root Logo Introduction"
            className={`${styles.boxedImg} ${styles.revealImage}`}
          />
          <img
            src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-2-scaled-1-1024x362.jpg"
            alt="Eco Root Logo Variants"
            className={`${styles.boxedImg} ${styles.revealImage}`}
          />
        </div>
      </section>

      {/* 4. Color Palette & Typography (New Section from Screenshot) */}
      <section className={styles.poweredSection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitLeft}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Colour-pallet-01-scaled-1-1024x1024.jpg"
              alt="Eco Root Color Palette"
              className={`${styles.fullWidthImg} ${styles.revealImage}`}
            />
          </div>
          <div
            className={`${styles.splitRight} ${styles.poweredTextContainer}`}
          >
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/999aca193876845.65f9936fde699.gif"
              alt="Eco Root Color Palette"
              className={`${styles.fullWidthImg} ${styles.revealImage}`}
            />
          </div>
        </div>
      </section>

      {/* 6. Mockups - Full Width */}
      <section className={styles.mockupSection}>
        <img
          src="https://webanatomy.in/wp-content/uploads/2024/05/Id-card-scaled-1.jpg"
          alt="Eco Root ID Card Mockup"
          className={`${styles.fullWidthImg} ${styles.revealImage}`}
        />
      </section>

      {/* 5. Image Grid Mockups (New Section from Screenshot) */}
      <section className={styles.gridSection}>
        <div className={styles.mockupGrid}>
          <div className={styles.gridItem}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-profile-03-scaled-1.jpg"
              alt="Eco Root Branding"
              className={styles.revealImage}
            />
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-profile-04-scaled-1.jpg"
              alt="Eco Root Tote"
              className={styles.revealImage}
            />
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-profile-05-scaled-1.jpg"
              alt="Eco Root Billboard"
              className={styles.revealImage}
            />
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-profile-06-scaled-1.jpg"
              alt="Eco Root Phone"
              className={styles.revealImage}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemFull}`}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/iPhone-14-Pro-PSD-Mockup-scaled-1.jpg"
              alt="Eco Root Phone Mockup"
              className={styles.revealImage}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemFull}`}>
            <img
              src="https://webanatomy.in/wp-content/uploads/2024/05/Smart_Watch-Mockup-scaled-1.jpg"
              alt="Eco Root Watch mockup"
              className={styles.revealImage}
            />
          </div>
        </div>
      </section>

      {/* 6. Spacers matching reference layout (Elementor Spacers) */}

      {/* 7. Additional Layout - Full Width Billboard Bottom */}
      <section className={styles.heroSection}>
        <img
          src="https://webanatomy.in/wp-content/uploads/2024/05/Eco-root-profile-01-scaled-1-2048x1152.jpg"
          alt="Eco Root Billboard Bottom"
          className={`${styles.fullWidthImg} ${styles.revealImage}`}
        />
      </section>
    </div>
  );
}
