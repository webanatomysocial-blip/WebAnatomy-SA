import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../../components/FAQ/FAQ";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import styles from "./BlogPage.module.css";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

import blog1Img from "../../assets/blog/blog1.jpg";
import blog2Img from "../../assets/blog/blog2.png";
import blog3Img from "../../assets/blog/blog3.jpg";

const articlesData = [
  {
    title: "Growth Hacking Strategies for SaaS Startups",
    tag: "Growth",
    image: blog1Img,
    featured: true,
  },
  {
    title: "How B2B Companies Can Accelerate Growth...",
    tag: "Strategy",
    image: blog2Img,
    featured: false,
  },
  {
    title: "Why Material Design Still Matters for Modern B2B...",
    tag: "Design",
    image: blog3Img,
    featured: false,
  },
  {
    title: "How B2B Companies Can Accelerate Growth...",
    tag: "Strategy",
    image: blog2Img,
    featured: false,
  },
  {
    title: "Why Material Design Still Matters for Modern B2B...",
    tag: "Design",
    image: blog3Img,
    featured: false,
  },
];

export default function Blog() {
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
        `.${styles["bp-hero-animate"]}`
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
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
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

  const featuredArticle = articlesData[0];
  const gridArticles = articlesData.slice(1);

  return (
    <>
      <AnimatedContent {...animProps}>
        {/* Hero — split layout */}
        <section className={styles["bp-hero"]} ref={heroRef}>
          <div className={styles["bp-hero-inner"]}>
            <div className={styles["bp-hero-left"]}>
              <AnimatedLetterHeading
                text="Innovative Ideas and|Industry Insights"
                tag="h1"
                className={`${styles["bp-hero-title"]} ${styles["bp-hero-animate"]}`}
              />
            </div>
            <div
              className={`${styles["bp-hero-right"]} ${styles["bp-hero-animate"]}`}
            >
              <p className={styles["bp-hero-desc"]}>
                Stay updated on design trends and tools shaping future
                experiences.
              </p>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent {...animProps}>
        {/* Articles */}
        <section className={styles["bp-articles"]}>
          <div className={styles["bp-articles-inner"]}>
            {/* Featured — image on top, title below */}
            <a
              href="#"
              className={styles["bp-featured"]}
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <div className={styles["bp-featured-image"]}>
                <img src={featuredArticle.image} alt={featuredArticle.title} />
              </div>
              <h2 className={styles["bp-featured-title"]}>
                {featuredArticle.title}
              </h2>
            </a>

            {/* Grid — horizontal cards: image left, title right */}
            <div className={styles["bp-grid"]}>
              {gridArticles.map((article, i) => (
                <a
                  key={i}
                  href="#"
                  className={styles["bp-card"]}
                  ref={(el) => (cardsRef.current[i + 1] = el)}
                >
                  <div className={styles["bp-card-image"]}>
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className={styles["bp-card-content"]}>
                    <h3 className={styles["bp-card-title"]}>{article.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent {...animProps}>
        {/* FAQ */}
        <FAQ />
      </AnimatedContent>
    </>
  );
}
