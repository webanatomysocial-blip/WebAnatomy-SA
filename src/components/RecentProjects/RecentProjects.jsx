import React, { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./RecentProjects.module.css";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

// Import local project images
import erynitsImg from "../../assets/projects/erynits.webp";
import agilImg from "../../assets/projects/agil.png";
import mudraYogaImg from "../../assets/projects/mudra_yoga.jpg";
import sonivaDentalImg from "../../assets/projects/soniva_dental.png";
import ecoRootImg from "../../assets/projects/eco_root.png";

const projectsData = [
  {
    index: "01",
    title: "Erynits",
    category: "Branding",
    image:
      "https://framerusercontent.com/images/glvzMi1bsrezkCOBb7gy7QI48k.webp",
    link: "/works/eryntis",
  },
  {
    index: "02",
    title: "AGIL",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/MdFGRJWHZgid1fJ5kMsPhQloI8.png",
    link: "/works/agil",
  },
  {
    index: "03",
    title: "Mudra Yoga",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/24DeAmSrXCLJAoqYo1s1mnp8yE.jpg",
    link: "/works/mudra",
  },
  {
    index: "04",
    title: "Soniva Dental",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/MtkDTAYw8w7K1UTf1faofBB0Uzk.png",
    link: "/works/soniva",
  },
  {
    index: "05",
    title: "Eco root",
    category: "Digital Services",
    image:
      "https://framerusercontent.com/images/iNjSWNheyN4OuwN0Ohs33jniNY.jpg",
    link: "/works/eco-root",
  },
  {
    index: "06",
    title: "Tekninja",
    category: "Digital Services",
    image: "https://framerusercontent.com/images/TxkveyjxfcKs4jTS0wR8EUe6w.png",
    link: "/works/tekninja",
  },
];

export default function RecentProjects({
  title = "Our Recent Projects",
  subtitle = "We drive growth for your business by making your brand more compelling online.",
}) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header reveal animation
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
      `.${styles["project-item"]}`,
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
              <a href="/work" className={styles["explore-more-btn"]}>
                Explore More <GoArrowUpRight className={styles["arrow-icon"]} />
              </a>
            </div>
          </header>

          <div className={styles["project-list"]} ref={listRef}>
            {projectsData.map((project, index) => (
              <a
                href={project.link || "#"}
                key={index}
                className={`${styles["project-item"]} ${hoveredProject === index ? styles["is-hovered"] : ""}`}
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Left info */}
                <div className={styles["project-info-left"]}>
                  <span className={styles["project-index"]}>
                    ({project.index})
                  </span>
                  <h3 className={styles["project-title"]}>{project.title}</h3>
                </div>

                {/* Centered preview image — only shown in the hovered row */}
                <div className={styles["project-image-preview"]}>
                  <img src={project.image} alt={project.title} />
                </div>

                {/* Right info */}
                <div className={styles["project-info-right"]}>
                  <span className={styles["project-category"]}>
                    {project.category}
                  </span>
                  <div className={styles["project-arrow"]}>
                    <GoArrowUpRight />
                  </div>
                </div>

                {/* Right glow */}
                <div className={styles["row-glow"]}></div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
