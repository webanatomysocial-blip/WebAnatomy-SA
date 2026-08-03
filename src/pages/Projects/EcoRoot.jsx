import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import styles from "./EcoRoot.module.css";

import heroImg from "../../assets/projects/ecoroot/ecoroot-hero.jpg";
import logoIntro from "../../assets/projects/ecoroot/ecoroot-logo-intro.jpg";
import logoVariants from "../../assets/projects/ecoroot/ecoroot-logo-variants.jpg";
import colourPalette from "../../assets/projects/ecoroot/ecoroot-colour-palette.jpg";
import animationGif from "../../assets/projects/ecoroot/ecoroot-animation.gif";
import idCard from "../../assets/projects/ecoroot/ecoroot-id-card.jpg";
import profile03 from "../../assets/projects/ecoroot/ecoroot-profile-03.jpg";
import profile04 from "../../assets/projects/ecoroot/ecoroot-profile-04.jpg";
import profile05 from "../../assets/projects/ecoroot/ecoroot-profile-05.jpg";
import profile06 from "../../assets/projects/ecoroot/ecoroot-profile-06.jpg";
import iphoneMockup from "../../assets/projects/ecoroot/ecoroot-iphone-mockup.jpg";
import watchMockup from "../../assets/projects/ecoroot/ecoroot-watch-mockup.jpg";
import billboardBottom from "../../assets/projects/ecoroot/ecoroot-billboard-bottom.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function EcoRoot() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
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
    <>
      <SEO
        title="Eco Root Branding Case Study | Web Axis Projects"
        description="Explore our eco-conscious branding, visual identity, and sustainable design for Eco Root."
      />
      <div className={styles.ecoRootPage} ref={containerRef}>
        {/* 1. Hero Image - Full Width */}
        <section className={styles.heroSection}>
          <img
            src={heroImg}
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
              src={logoIntro}
              alt="Eco Root Logo Introduction"
              className={`${styles.boxedImg} ${styles.revealImage}`}
            />
            <img
              src={logoVariants}
              alt="Eco Root Logo Variants"
              className={`${styles.boxedImg} ${styles.revealImage}`}
            />
          </div>
        </section>

        {/* 4. Color Palette & Typography */}
        <section className={styles.poweredSection}>
          <div className={styles.splitGrid}>
            <div className={styles.splitLeft}>
              <img
                src={colourPalette}
                alt="Eco Root Color Palette"
                className={`${styles.fullWidthImg} ${styles.revealImage}`}
              />
            </div>
            <div
              className={`${styles.splitRight} ${styles.poweredTextContainer}`}
            >
              <img
                src={animationGif}
                alt="Eco Root Color Palette Animation"
                className={`${styles.fullWidthImg} ${styles.revealImage}`}
              />
            </div>
          </div>
        </section>

        {/* 5. Mockups - Full Width */}
        <section className={styles.mockupSection}>
          <img
            src={idCard}
            alt="Eco Root ID Card Mockup"
            className={`${styles.fullWidthImg} ${styles.revealImage}`}
          />
        </section>

        {/* 6. Image Grid Mockups */}
        <section className={styles.gridSection}>
          <div className={styles.mockupGrid}>
            <div className={styles.gridItem}>
              <img
                src={profile03}
                alt="Eco Root Branding"
                className={styles.revealImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img
                src={profile04}
                alt="Eco Root Tote"
                className={styles.revealImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img
                src={profile05}
                alt="Eco Root Billboard"
                className={styles.revealImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img
                src={profile06}
                alt="Eco Root Phone"
                className={styles.revealImage}
              />
            </div>
            <div className={`${styles.gridItem} ${styles.gridItemFull}`}>
              <img
                src={iphoneMockup}
                alt="Eco Root Phone Mockup"
                className={styles.revealImage}
              />
            </div>
            <div className={`${styles.gridItem} ${styles.gridItemFull}`}>
              <img
                src={watchMockup}
                alt="Eco Root Watch mockup"
                className={styles.revealImage}
              />
            </div>
          </div>
        </section>

        {/* 7. Additional Layout - Full Width Billboard Bottom */}
        <section className={styles.heroSection}>
          <img
            src={billboardBottom}
            alt="Eco Root Billboard Bottom"
            className={`${styles.fullWidthImg} ${styles.revealImage}`}
          />
        </section>
      </div>
    </>
  );
}
