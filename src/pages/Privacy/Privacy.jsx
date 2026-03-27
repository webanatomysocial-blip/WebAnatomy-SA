import React, { useEffect } from "react";
import styles from "./Privacy.module.css";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent";

const Privacy = () => {
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
    <div className={styles.privacyPage}>
      <AnimatedContent {...animProps}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <AnimatedLetterHeading
              text="Privacy Policy"
              tag="h1"
              className={styles.title}
            />
            <p className={styles.subtitle}>Last updated: March 2026</p>
          </div>
        </section>
      </AnimatedContent>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <AnimatedContent {...animProps} delay={0.2}>
            <div className={styles.contentBlock}>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Web Anatomy Digital Services LLP. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.3}>
            <div className={styles.contentBlock}>
              <h2>2. The Data We Collect</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.4}>
            <div className={styles.contentBlock}>
              <h2>3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To provide the services you have requested.</li>
                <li>To improve our website and services based on your usage.</li>
                <li>To contact you regarding your inquiries or services.</li>
              </ul>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.5}>
            <div className={styles.contentBlock}>
              <h2>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
