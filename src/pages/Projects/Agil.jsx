import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO.jsx";
import styles from "./Agil.module.css";

import img1 from "../../assets/projects/agil/Agil-1-01.png";
import img2 from "../../assets/projects/agil/Agil-1-02.png";
import img3 from "../../assets/projects/agil/Agil-1-07.png";
import img4 from "../../assets/projects/agil/Agil-1-03.png";
import img5 from "../../assets/projects/agil/Agil-1-05.png";
import img6 from "../../assets/projects/agil/Free_Stationery_Mockup_1.png";
import img7 from "../../assets/projects/agil/Agil-1-06.png";
import img8 from "../../assets/projects/agil/Agil-lifestyle.png";
import img9 from "../../assets/projects/agil/T-shirt.png";

const agilImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

gsap.registerPlugin(ScrollTrigger);

export default function Agil() {
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
        title="AGIL Branding & Digital Services | Web Axis Projects"
        description="Explore our digital services and identity branding work for AGIL."
      />
      <div className={styles.agilPage} ref={containerRef}>
        {agilImages.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Agil Branding ${index + 1}`} className={styles.fullWidthImg} />
          </div>
        ))}
      </div>
    </>
  );
}
