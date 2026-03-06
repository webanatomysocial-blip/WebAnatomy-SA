import React, { useEffect, useRef } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";
import styles from "./FullFunnelServices.module.css";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "01",
    title: "User Experience Design",
    description: ["UI/UX Design", "Wireframing & Prototyping", "Usability Testing"],
  },
  {
    number: "02",
    title: "Web & Mobile Development",
    description: ["Frontend Engineering", "Backend Architecture", "Mobile App Development"],
  },
  {
    number: "03",
    title: "Digital Marketing",
    description: ["SEO & SEM Strategy", "Social Media Management", "Content Creation"],
  },
  {
    number: "04",
    title: "Branding & Identity",
    description: ["Brand Strategy", "Logo & Visual Identity", "Brand Guidelines"],
  },
];

export default function FullFunnelServices() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Header right-side reveal animation
    const headerRight = containerRef.current.querySelector(`.${styles['header-right']}`);
    if (headerRight) {
      gsap.fromTo(
        headerRight,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cards stagger animation
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // View more button
    const viewMore = containerRef.current.querySelector(`.${styles['view-more-container']}`);
    if (viewMore) {
      gsap.fromTo(
        viewMore,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: {
            trigger: viewMore,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className={styles['full-funnel-services']} ref={containerRef}>
      <div className={styles['services-container']}>
        <header className={styles['services-header']}>
          <div className={styles['header-left']}>
            <AnimatedLetterHeading
              text="A full-funnel approach to scale"
              tag="h2"
              className={styles['section-title']}
            />
          </div>
          <div className={styles['header-right']}>
            <p className={styles['section-desc']}>
              We strive to give our customers and their users the best possible experience.
            </p>
            <a href="/services" className={styles['our-services-btn']}>
              Our Services <GoArrowUpRight className={styles['arrow-icon']} />
            </a>
          </div>
        </header>
<AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power2.out"
        initialOpacity={0.1}
        animateOpacity
        threshold={0.01}
        delay={0.3}
      >
        <div className={styles['services-grid']}>
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={styles['service-card']}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className={styles['card-top']}>
                <span className={styles['service-number']}>{service.number}</span>
                <div className={styles['arrow-circle']}>
                  <GoArrowUpRight />
                </div>
              </div>
              <div className={styles['card-bottom']}>
                <h3 className={styles['service-title']}>{service.title}</h3>
                <ul className={styles['service-list']}>
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Background Glow Effect */}
              <div className={styles['card-glow']}></div>
            </div>
          ))}
        </div>
      </AnimatedContent>

        <div className={styles['view-more-container']}>
          <a href="/services" className={styles['view-more-btn']}>
            View more <GoArrowUpRight />
          </a>
        </div>
      </div>
      {/* Background Aurora Elements */}
      <div className={`${styles['bg-aurora']} ${styles['aurora-1']}`}></div>
      <div className={`${styles['bg-aurora']} ${styles['aurora-2']}`}></div>
    </section>
  );
}
