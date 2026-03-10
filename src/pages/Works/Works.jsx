import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../../components/FAQ/FAQ";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import styles from "./WorksPage.module.css";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

// Import local project images
import erynitsImg from "../../assets/projects/erynits.webp";
import agilImg from "../../assets/projects/agil.png";
import mudraYogaImg from "../../assets/projects/mudra_yoga.jpg";
import sonivaDentalImg from "../../assets/projects/soniva_dental.png";
import ecoRootImg from "../../assets/projects/eco_root.png";

const projectsData = [
  {
    number: "01",
    title: "Erynits",
    desc: "Contemporary and minimalist design approaches for art exhibitions.",
    tags: ["Branding"],
    image: "https://framerusercontent.com/images/glvzMi1bsrezkCOBb7gy7QI48k.webp",
  },
  {
    number: "02",
    title: "AGIL",
    desc: "Contemporary and minimalist design approaches for art exhibitions.",
    tags: ["Digital Services", "Branding"],
    image: "https://framerusercontent.com/images/MdFGRJWHZgid1fJ5kMsPhQloI8.png",
  },
  {
    number: "03",
    title: "Mudra Yoga",
    desc: "Contemporary and minimalist design approaches for art exhibitions.",
    tags: ["Digital Services"],
    image: "https://framerusercontent.com/images/24DeAmSrXCLJAoqYo1s1mnp8yE.jpg",
  },
  {
    number: "04",
    title: "Soniva Dental",
    desc: "Contemporary and minimalist design approaches for art exhibitions.",
    tags: ["Digital Services"],
    image: "https://framerusercontent.com/images/MtkDTAYw8w7K1UTf1faofBB0Uzk.png",
  },
  {
    number: "05",
    title: "Eco root",
    desc: "Contemporary and minimalist design approaches for art exhibitions.",
    tags: ["Digital Services"],
    image: "https://framerusercontent.com/images/iNjSWNheyN4OuwN0Ohs33jniNY.jpg",
  },
  {
    number: "06",
    title: "Tekninja",
    desc: "Elevating home automation with strategic social media marketing and branding.",
    tags: ["Digital Services", "Branding"],
    image: "https://framerusercontent.com/images/TxkveyjxfcKs4jTS0wR8EUe6w.png",
  },
];

export default function Works() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const animProps = {
    distance: 150,
    direction: "vertical",
    reverse: false,
    duration: 1.2,
    ease: "power2.out",
    initialOpacity: 0.1,
    animateOpacity: true,
    threshold: 0.01,
    delay: 0.3,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroEls = heroRef.current.querySelectorAll(
        `.${styles["wp-hero-animate"]}`
      );
      gsap.fromTo(
        heroEls,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: heroRef.current, start: "top 85%" },
        }
      );

      // Cards stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 90%" },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
        {/* Hero */}
        <section className={styles["wp-hero"]} ref={heroRef}>
          <div className={styles["wp-hero-inner"]}>
             <AnimatedContent {...animProps}>

            <div className={styles["wp-hero-left"]}>
              <span
                className={`${styles["wp-hero-badge"]} ${styles["wp-hero-animate"]}`}
              >
                <span className={styles["badge-dot-trustpilot"]} /> 59+ Reviews
                on ★ <span className={styles["trustpilot-text"]}>Trustpilot</span>
              </span>
              <AnimatedLetterHeading
                text="See How We Transform|Ideas Into Impact"
                tag="h1"
                className={`${styles["wp-hero-title"]} ${styles["wp-hero-animate"]}`}
              />
            </div>
                          
             </AnimatedContent>
                        <AnimatedContent {...animProps}>
            <div
              className={`${styles["wp-hero-right"]} ${styles["wp-hero-animate"]}`}
            >
              <p className={styles["wp-hero-desc"]}>
                We transform creative concepts into designs that leave a lasting
                impression and drive results.
              </p>
            </div>
            </AnimatedContent>
          </div>
        </section>


        {/* Projects grid */}
        <section className={styles["wp-projects"]}>
          <div className={styles["wp-projects-inner"]}>
                  <AnimatedContent {...animProps}>
            <div className={styles["wp-grid"]}>
              {projectsData.map((project, index) => (
                <a
                  key={index}
                  href={
                    project.title === "Erynits"
                      ? "/works/eryntis"
                      : project.title === "AGIL"
                      ? "/works/agil"
                      : project.title === "Mudra Yoga"
                      ? "/works/mudra"
                      : project.title === "Soniva Dental"
                      ? "/works/soniva"
                      : project.title === "Eco root"
                      ? "/works/eco-root"
                      : project.title === "Tekninja"
                      ? "/works/tekninja"
                      : "#"
                  }
                  className={styles["wp-card"]}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  {/* Image */}
                  <div className={styles["wp-card-image"]}>
                    <img src={project.image} alt={project.title} />
                  </div>

                  {/* Tags below image */}
                  <div className={styles["wp-card-tags"]}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles["wp-tag"]}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + description */}
                  <div className={styles["wp-card-info"]}>
                    <h3 className={styles["wp-card-title"]}>{project.title}</h3>
                    <p className={styles["wp-card-desc"]}>{project.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            </AnimatedContent>
          </div>
        </section>


   
        {/* FAQ */}
        <FAQ />
    </>
  );
}
