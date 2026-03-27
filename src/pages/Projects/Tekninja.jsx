import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Tekninja.module.css";

gsap.registerPlugin(ScrollTrigger);

const Tekninja = () => {
  const pageRef = useRef(null);

  useEffect(() => {
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

  const projectImages = [
    "https://webanatomy.in/wp-content/uploads/2024/06/tekninja-social-media-02.png",
    "https://webanatomy.in/wp-content/uploads/2024/06/tekninja-social-media-03.png",
    "https://webanatomy.in/wp-content/uploads/2024/06/tekninja-social-media-04.png",
    "https://webanatomy.in/wp-content/uploads/2024/06/tekninja-social-media-05.png",
    "https://webanatomy.in/wp-content/uploads/2024/06/tekninja-social-media-06.png",
  ];

  return (
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
  );
};

export default Tekninja;
