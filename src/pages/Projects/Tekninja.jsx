import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import styles from "./Tekninja.module.css";

import img1 from "../../assets/projects/tekninja/tekninja-02.png";
import img2 from "../../assets/projects/tekninja/tekninja-03.png";
import img3 from "../../assets/projects/tekninja/tekninja-04.png";
import img4 from "../../assets/projects/tekninja/tekninja-05.png";
import img5 from "../../assets/projects/tekninja/tekninja-06.png";

const projectImages = [img1, img2, img3, img4, img5];

gsap.registerPlugin(ScrollTrigger);

const Tekninja = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const images = document.querySelectorAll(`.${styles.revealImage}`);
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Tekninja Branding & Automation Case Study | Web Axis Projects"
        description="Elevating home automation with strategic social media marketing and branding for Tekninja."
      />
      <div className={styles.tekninjaPage} ref={pageRef}>
        <div className={styles.imageStack}>
          {projectImages.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={src}
                alt={`Tekninja Showcase ${index + 1}`}
                className={`${styles.fullWidthImg} ${styles.revealImage}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tekninja;
