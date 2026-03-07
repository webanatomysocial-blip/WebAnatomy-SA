import React, { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FAQ.module.css";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What results can I expect from working with Business Anatomy?",
    answer: "Results vary, but see improvements in 30-90 days",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timeline depends on scope and complexity, but most projects range from 4–12 weeks. Larger, more involved initiatives may take longer. Once we understand your requirements, we provide a detailed timeline so expectations are clear from the start.",
  },
  {
    question: "What's your development process like?",
    answer:
      "Our process is collaborative and iterative. We begin by understanding your objectives and user needs, then move into strategy, design, and development. Throughout the project, we share progress, gather feedback, and refine the work to ensure the final result aligns perfectly with your vision.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support to ensure everything runs smoothly, including maintenance, updates, optimization, and continued enhancements. We’re here to help your project evolve as your needs grow.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      },
    );

    // FAQ items stagger
    const items = listRef.current.querySelectorAll(`.${styles["faq-item"]}`);
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: listRef.current, start: "top 80%" },
      },
    );
  }, []);

  return (
    <section className={styles["faq-section"]} ref={sectionRef}>
      <AnimatedContent>
        <div className={styles["faq-container"]}>
          <div className={styles["faq-header"]} ref={headerRef}>
            <AnimatedLetterHeading
              text="Frequently Asked Questions"
              tag="h2"
              className={styles["testimonials-heading"]}
            />
            <p className={styles["faq-subtitle"]}>
              Got questions? We've answered the most common ones below. If you
              need more information, schedule a free consultation.
            </p>
          </div>

          <div className={styles["faq-list"]} ref={listRef}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles["faq-item"]} ${activeIndex === index ? styles["active"] : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles["faq-question-row"]}>
                  <h3 className={styles["faq-question"]}>{item.question}</h3>
                  <div className={styles["faq-icon-wrapper"]}>
                    <div className={styles["faq-icon-circle"]}>
                      <GoArrowUpRight className={styles["faq-arrow"]} />
                    </div>
                  </div>
                </div>
                <div
                  className={styles["faq-answer-wrapper"]}
                  style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                >
                  <p className={styles["faq-answer"]}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
