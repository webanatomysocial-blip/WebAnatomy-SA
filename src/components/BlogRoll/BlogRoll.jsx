import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./BlogRoll.module.css";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

import blog1Img from "../../assets/blog/blog1.jpg";
import blog2Img from "../../assets/blog/blog2.png";
import blog3Img from "../../assets/blog/blog3.jpg";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";

const articlesData = [
  {
    title: "Growth Hacking Strategies for SaaS Startups",
    tag: "Growth",
    image: blog1Img,
    href: "/blog",
  },
  {
    title: "How B2B Companies Can Accelerate Growth Through Digital Transformation",
    tag: "Strategy",
    image: blog2Img,
    href: "/blog",
  },
  {
    title: "Why Material Design Still Matters for Modern B2B and SaaS Platforms",
    tag: "Design",
    image: blog3Img,
    href: "/blog",
  },
];

export default function BlogRoll() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current.querySelector(`.${styles['blogroll-header']}`),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      }
    );
  }, []);

  return (
    <section className={styles.blogroll} ref={sectionRef}>
      <AnimatedContent>
        <div className={styles['blogroll-container']}>

          {/* Header */}
          <div className={styles['blogroll-header']}>
            <div className={styles['blogroll-header-left']}>
              <AnimatedLetterHeading
              text="Let's blog'n roll"
              tag="h2"
              className={styles["testimonials-heading"]}
            />
            
              <p className={styles['blogroll-subtitle']}>Our very own magazine.</p>
            </div>
            <a href="/blog" className={styles['blogroll-all-btn']}>
              All Articles <GoArrowUpRight />
            </a>
          </div>

          {/* Cards */}
          <div className={styles['blogroll-grid']}>
            {articlesData.map((article, i) => (
              <a
                key={i}
                href={article.href}
                className={styles['blog-card']}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                {/* Thumbnail */}
                <div className={styles['blog-card-image']}>
                  <img src={article.image} alt={article.title} />
                </div>

                {/* Content */}
                <div className={styles['blog-card-content']}>
                  <span className={styles['blog-tag']}>{article.tag}</span>
                  <h3 className={styles['blog-card-title']}>{article.title}</h3>
                  <div className={styles['blog-card-arrow']}>
                    <GoArrowUpRight />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </AnimatedContent>
    </section>
  );
}
