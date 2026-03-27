import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./RecentProjects.module.css";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

const projectsData = [
  {
    index: "01",
    title: "Erynits",
    category: "Branding",
    image:
      "https://framerusercontent.com/images/glvzMi1bsrezkCOBb7gy7QI48k.webp",
    link: "/projects/eryntis",
  },
  {
    index: "02",
    title: "AGIL",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/MdFGRJWHZgid1fJ5kMsPhQloI8.png",
    link: "/projects/agil",
  },
  {
    index: "03",
    title: "Mudra Yoga",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/24DeAmSrXCLJAoqYo1s1mnp8yE.jpg",
    link: "/projects/mudra",
  },
  {
    index: "04",
    title: "Soniva Dental",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/MtkDTAYw8w7K1UTf1faofBB0Uzk.png",
    link: "/projects/soniva",
  },
  {
    index: "05",
    title: "Eco root",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/iNjSWNheyN4OuwN0Ohs33jniNY.jpg",
    link: "/projects/eco-root",
  },
  {
    index: "06",
    title: "Tekninja",
    category: "Digital Services",
    image: "https://framerusercontent.com/images/TxkveyjxfcKs4jTS0wR8EUe6w.png",
    link: "/projects/tekninja",
  },
];

export default function RecentProjects({
  title = "Our Recent Projects",
  subtitle = "We drive growth for your business by making your brand more compelling online.",
}) {
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // Auto-scroll for mobile carousel
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      if (listRef.current) {
        const { scrollLeft, scrollWidth, offsetWidth } = listRef.current;
        const maxScroll = scrollWidth - offsetWidth;
        
        if (scrollLeft >= maxScroll - 1) {
          listRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          listRef.current.scrollTo({
            left: scrollLeft + offsetWidth,
            behavior: "smooth",
          });
        }
      }
    }, 2500); // 2.5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header reveal animation (only for desktop to avoid conflicts)
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      const header = containerRef.current.querySelector(
        `.${styles["projects-header"]}`,
      );
      gsap.fromTo(
        header,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
        },
      );

      // List items stagger reveal
      const items = listRef.current.querySelectorAll(
        `.${styles["project-card"]}`,
      );
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" },
        },
      );
    }
  }, []);

  return (
    <section className={styles["recent-projects"]} ref={containerRef}>
      <AnimatedContent>
        <div className={styles["projects-container"]}>
          <header className={styles["projects-header"]}>
            <div className={styles["header-left"]}>
              <AnimatedLetterHeading
                text={title}
                tag="h2"
                className={styles["testimonials-heading"]}
              />
            </div>
            <div className={styles["header-right"]}>
              <p className={styles["section-desc"]}>{subtitle}</p>
              <a href="/projects" className={styles["explore-more-btn"]}>
                Explore More <GoArrowUpRight className={styles["arrow-icon"]} />
              </a>
            </div>
          </header>

          <div className={styles["projects-grid"]} ref={listRef}>
            {projectsData.map((project, index) => (
              <a
                href={project.link || "#"}
                key={index}
                className={styles["project-card"]}
              >
                <div className={styles["card-image-wrapper"]}>
                  <img src={project.image} alt={project.title} className={styles["card-image"]} />
                </div>
                
                <div className={styles["card-content"]}>
                  <div className={styles["card-metadata"]}>
                    <div className={styles["card-meta-left"]}>
                      <span className={styles["project-index"]}>{project.index}</span>
                      <span className={styles["project-category"]}>{project.category}</span>
                    </div>
                    <div className={styles["card-arrow"]}>
                      <GoArrowUpRight />
                    </div>
                  </div>
                  <h3 className={styles["project-title"]}>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
