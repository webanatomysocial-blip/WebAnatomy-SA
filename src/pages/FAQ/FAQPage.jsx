import React, { useEffect } from "react";
import FAQ from "../../components/FAQ/FAQ";
import styles from "./FAQPage.module.css";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animProps = {
    distance: 100,
    direction: "vertical",
    duration: 1,
    ease: "power2.out",
  };

  return (
    <div className={styles.faqPage}>
      <AnimatedContent {...animProps}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <AnimatedLetterHeading
              text="Support & FAQs"
              tag="h1"
              className={styles.title}
            />
            <p className={styles.subtitle}>Find answers to commonly asked questions about our process, pricing, and services.</p>
          </div>
        </section>
      </AnimatedContent>

      <div className={styles.contentSection}>
         <FAQ />
      </div>

      <AnimatedContent {...animProps} delay={0.4}>
        <section className={styles.ctaSection}>
           <div className={styles.container}>
              <h2>Still have questions?</h2>
              <p>We're here to help you build something amazing.</p>
              <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
           </div>
        </section>
      </AnimatedContent>
    </div>
  );
};

export default FAQPage;
