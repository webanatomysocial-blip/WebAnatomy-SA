import React, { useEffect } from "react";
import styles from "../Privacy/Privacy.module.css";
import useCanonical from "../../hooks/useCanonical";
import SEO from "../../components/SEO/SEO";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent";

const Terms = () => {
  useCanonical("https://webaxis.co.za/terms");

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
      <SEO title="Terms & Conditions | Web Axis South Africa" description="Read the Web Axis Terms & Conditions outlining website usage, service agreements, user responsibilities, and legal policies." />
      <AnimatedContent {...animProps}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <AnimatedLetterHeading
              text="Terms of Service"
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing our website at webanatomy.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.3}>
            <div className={styles.contentBlock}>
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Web Anatomy Digital Services LLP's website for personal, non-commercial transitory viewing only.
              </p>
              <ul>
                <li>This is the grant of a license, not a transfer of title.</li>
                <li>This license shall automatically terminate if you violate any of these restrictions.</li>
              </ul>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.4}>
            <div className={styles.contentBlock}>
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Web Anatomy Digital Services LLP's website are provided on an 'as is' basis. Web Anatomy Digital Services LLP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent {...animProps} delay={0.5}>
            <div className={styles.contentBlock}>
              <h2>4. Limitations</h2>
              <p>
                In no event shall Web Anatomy Digital Services LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default Terms;
