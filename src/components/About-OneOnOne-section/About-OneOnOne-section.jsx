import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About-OneOnOne-section.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOneOnOneSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const stats = [
    { number: "80+", text: "Brands we call clients" },
    { number: "20+", text: "Creative technologists in the team" },
    { number: "81+", text: "Net promoter score" },
    { number: "08+", text: "Digital products" },
    { number: "60+", text: "Brand Refreshments" },
   
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current;
      if (!items || items.length === 0) return;

      // 1. Set initial states
      gsap.set(items[0], { yPercent: 0, opacity: 1 });
      gsap.set(items.slice(1), { yPercent: 100, opacity: 0 });

      // 2. Create Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // Extra scroll length for more items
          start: "top top",
          end: "+=5000", 
          scrub: 1, 
          pin: true,
          anticipatePin: 1,
        },
      });

      // 3. Sequence
      items.forEach((item, index) => {
        if (index < items.length - 1) {
          const nextItem = items[index + 1];

          tl.to(item, {
            yPercent: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
          }).to(
            nextItem,
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "<",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  itemsRef.current = [];

  return (
    <section
      ref={sectionRef}
      className={styles["wa-about-one-on-one-section"]}
    >
      <div className={styles["wa-about-one-on-one-total-sticky-container"]}>
        <div className={styles["wa-about-one-on-one-left-outer-container"]}>
          <p className={styles["head-text-white"]}>
            Big Dreams,
<br /> Bigger Numbers


          </p>
          <p className={styles["para-text-white"]}>
            We deliver results that move the needle. Our statistics reflect our commitment to excellence and our partners' success.
          </p>
        </div>

        <div className={styles["wa-about-one-on-one-right-outer-container"]}>
          <div
            ref={containerRef}
            className={
              styles["wa-about-one-on-one-right-inner-transparent-container"]
            }
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={
                  styles[
                    "wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
                  ]
                }
              >
                <p className={styles["big-head-text-white"]}>{stat.number}</p>
                <p className={styles["para-text-white"]}>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
