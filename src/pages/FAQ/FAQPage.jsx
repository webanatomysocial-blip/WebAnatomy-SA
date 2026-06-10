import React, { useEffect } from "react";
import FAQ from "../../components/FAQ/FAQ";
import useCanonical from "../../hooks/useCanonical";
import SEO from "../../components/SEO/SEO";
import styles from "./FAQPage.module.css";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent";

const FAQPage = () => {
  useCanonical("https://webaxis.co.za/faqs");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animProps = {
    distance: 100,
    direction: "vertical",
    duration: 1,
    ease: "power2.out",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does Web Axis offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web Axis provides SEO, PPC, social media marketing, web development, branding, and digital growth solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO services in South Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Web Axis offers professional SEO services to help businesses improve search visibility and generate more leads."
        }
      }
    ]
  };

  return (
    <div className={styles.faqPage}>
      <SEO title="SEO, PPC & Digital Marketing FAQs | Web Axis South Africa" description="Get answers to common questions about digital marketing, SEO, web development, PPC, branding, and online business growth in South Africa." schema={schema} />
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
