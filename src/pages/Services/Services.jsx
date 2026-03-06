import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../../components/FAQ/FAQ";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import styles from "./ServicesPage.module.css";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "01",
    title: "SEO",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "SEO Analytics",
    ],
  },
  {
    number: "02",
    title: "Social Media",
    items: ["Content Creation", "Social Campaigns", "Performance Tracking"],
  },
  {
    number: "03",
    title: "Web & App Development",
    items: [
      "Responsive Development",
      "Web Applications",
      "Mobile Apps",
      "Performance Optimization",
    ],
  },
  {
    number: "04",
    title: "UI/UX Design",
    items: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
    ],
  },
  {
    number: "05",
    title: "Branding",
    items: ["Brand Strategy", "Visual Identity", "Market Positioning"],
  },
  {
    number: "06",
    title: "Performance Marketing",
    items: [
      "Paid Advertising",
      "Campaign Analytics",
      "Audience Targeting",
      "Retargeting Ads",
    ],
  },
];

const approachData = [
  {
    step: "01",
    title: "Discovery and Insight",
    desc: "We start by diving deep into your brand's story, goals, and audience. This helps us uncover what truly sets you apart and guides every creative decision ahead.",
  },
  {
    step: "02",
    title: "Strategy Driven Design",
    desc: "Every idea we bring to life is backed by strategy. We combine creativity with data driven thinking to craft digital experiences that connect and convert.",
  },
  {
    step: "03",
    title: "Evolve and Refine",
    desc: "Design doesn't stop at delivery. We analyze, adapt, and refine continuously, ensuring your brand grows stronger with every iteration.",
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const approachRef = useRef(null);

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
        `.${styles["sp-hero-animate"]}`
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

      // Service cards stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%" },
        }
      );

      // Approach section
      if (approachRef.current) {
        const steps = approachRef.current.querySelectorAll(
          `.${styles["approach-step"]}`
        );
        gsap.fromTo(
          approachRef.current.querySelector(`.${styles["approach-header"]}`),
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: approachRef.current, start: "top 85%" },
          }
        );
        gsap.fromTo(
          steps,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: approachRef.current, start: "top 75%" },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
    
        {/* Hero */}
        <section className={styles["sp-hero"]} ref={heroRef}>
          <AnimatedContent>
            <div className={styles["sp-hero-inner"]}>
              <div className={styles["sp-hero-left"]}>
                <span
                  className={`${styles["sp-hero-badge"]} ${styles["sp-hero-animate"]}`}
                >
                  <span className={styles["badge-dot"]} /> Available for new
                  project
                </span>
                <AnimatedLetterHeading
                  text="Transforming Ideas Into|Scalable Solutions"
                  tag="h1"
                  className={`${styles["sp-hero-title"]} ${styles["sp-hero-animate"]}`}
                />
              </div>
              <div
                className={`${styles["sp-hero-right"]} ${styles["sp-hero-animate"]}`}
              >
                <p className={styles["sp-hero-desc"]}>
                  We strive to give our customers and their users the best
                  possible experience.
                </p>
                <Link to="/contact" className={styles["sp-hero-cta"]}>
                  Contact us <GoArrowUpRight />
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </section>
  

        {/* Services Grid */}
        <section className={styles["sp-services"]}>
          <AnimatedContent>
            <div className={styles["sp-services-inner"]}>
              <div className={styles["sp-services-grid"]}>
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={styles["sp-card"]}
                    ref={(el) => (cardsRef.current[index] = el)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                  >
                    <div className={styles["sp-card-top"]}>
                      <span className={styles["sp-card-number"]}>
                        {service.number}
                      </span>
                      <div className={styles["sp-card-arrow"]}>
                        <GoArrowUpRight />
                      </div>
                    </div>
                    <div className={styles["sp-card-bottom"]}>
                      <h3 className={styles["sp-card-title"]}>{service.title}</h3>
                      <ul className={styles["sp-card-list"]}>
                        {service.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["sp-card-glow"]} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

      
        {/* Our Approach */}
        <section className={styles["sp-approach"]} ref={approachRef}>
          <AnimatedContent>
            <div className={styles["sp-approach-inner"]}>
              <h2 className={styles["approach-header"]}>Our Approach</h2>
              <div className={styles["approach-cards"]}>
                {approachData.map((item, i) => (
                  <div key={i} className={styles["approach-card"]}>
                    <span className={styles["approach-card-num"]}>
                      {item.step}
                    </span>
                    <div className={styles["approach-card-body"]}>
                      <h3 className={styles["approach-card-title"]}>
                        {item.title}
                      </h3>
                      <p className={styles["approach-card-desc"]}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>
    

        {/* FAQ */}
        <FAQ />
    
    </>
  );
}
