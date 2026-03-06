import React, { useState } from "react";
import styles from "./Careers.module.css";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import ClientsImg from "../../components/Clients-img/Clients-img.jsx";
import TrustSection from "../../components/TrustSection/TrustSection.jsx";
import Insights from "../../components/Insights/Insights.jsx";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";
import {
  GoArrowRight,
  GoChevronDown,
  GoGraph,
  GoCreditCard,
  GoFlame,
  GoZap,
  GoHeart,
  GoPeople,
} from "react-icons/go";

const Careers = () => {
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

  return (
    <>
      {/* ================= HERO ================= */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-careers-hero"]}>
          {/* Background image */}
          <div className={styles["wa-careers-hero-bg"]} />

          {/* Overlay */}
          <div className={styles["wa-careers-hero-overlay"]} />

          {/* Content */}
          <div className={styles["wa-careers-hero-content"]}>
            <AnimatedLetterHeading
              text="Let Our Team|Be Your New Team"
              tag="h1"
              className={styles["wa-careers-hero-title"]}
            />

            <p className={styles["wa-careers-hero-desc"]}>
              We always strive to make a positive difference in everything. If
              that’s important to you, Webandcrafts would be a good fit.
            </p>

            <a href="#openings" className={styles["wa-careers-hero-btn"]}>
              Current openings <GoArrowRight />
            </a>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
    CURRENT OPENINGS – SIMPLE ACCORDION
=============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-careers-openings-advanced"]}>
          <div className={styles["wa-careers-openings-container"]}>
            <h2 className={styles["wa-openings-title"]}>Current Openings</h2>
            <p className={styles["wa-openings-subtext"]}>
              Become part of a high-performing & collaborative team
            </p>

            <div className={styles["wa-openings-accordion"]}>
              <OpeningAccordion
                title="Business Development"
                description="We are looking for passionate professionals who can drive growth, manage client relationships, and help scale our business initiatives across industries."
              />

              <OpeningAccordion
                title="Data & Analytics"
                description="Join our analytics team to transform data into actionable insights, build dashboards, and support data-driven decision making."
              />

              <OpeningAccordion
                title="Design"
                description="Work closely with cross-functional teams to design intuitive user experiences, wireframes, and visually compelling interfaces."
              />
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
    VALUES – STICKY LEFT / SCROLL RIGHT (CORRECT)
=============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-careers-values-sticky"]}>
          <div className={styles["wa-values-inner"]}>
            {/* LEFT (STICKY) */}
            <div className={styles["wa-values-left"]}>
              <h2>
                The Values <br /> We Live By
              </h2>
              <p>
                We make it a priority to keep our values up-front, anywhere and
                everywhere.
              </p>

              <div className={styles["wa-values-arrow"]}>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* RIGHT (SCROLL CONTENT) */}
            <div className={styles["wa-values-right"]}>
              <div className={styles["wa-value-block"]}>
                <span>01</span>
                <h3>Growth</h3>
                <p>
                  Our vision is to grow together as an organisation while
                  working towards achieving individual and professional goals.
                </p>
              </div>

              <div className={styles["wa-value-block"]}>
                <span>02</span>
                <h3>People</h3>
                <p>
                  Our people are the driving force behind all our achievements,
                  and we make it a point to give it back to them.
                </p>
              </div>

              <div className={styles["wa-value-block"]}>
                <span>03</span>
                <h3>Balance</h3>
                <p>
                  We value life and its intricate balance, ensuring all our
                  people are well balanced professionally and personally.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
    PERKS & BENEFITS
=============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-careers-perks"]}>
          <div className={styles["wa-careers-perks-container"]}>
            {/* HEADER */}
            <div className={styles["wa-careers-perks-header"]}>
              <h2 className={styles["wa-careers-perks-title"]}>
                Perks & Benefits
              </h2>
              <p className={styles["wa-careers-perks-subtext"]}>
                We make our employees' well-being our priority, by providing
                only the best
              </p>
            </div>

            {/* ITEMS */}
            <div className={styles["wa-careers-perks-list"]}>
              <div className={styles["wa-careers-perk"]}>
                <GoGraph className={styles["wa-careers-perk-icon"]} />
                <h3>Growth Opportunities</h3>
                <p>Keeping our employees growing and prospering is our goal.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>

              <div className={styles["wa-careers-perk"]}>
                <GoCreditCard className={styles["wa-careers-perk-icon"]} />
                <h3>Competitive Remuneration</h3>
                <p>We recognise and reward employee contributions.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>

              <div className={styles["wa-careers-perk"]}>
                <GoFlame className={styles["wa-careers-perk-icon"]} />
                <h3>Eco-friendly Workplace</h3>
                <p>Nature-driven spaces that enhance mental wellbeing.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>

              <div className={styles["wa-careers-perk"]}>
                <GoZap className={styles["wa-careers-perk-icon"]} />
                <h3>Fun Work Environment</h3>
                <p>Positive energy, creativity, and collaboration.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>

              <div className={styles["wa-careers-perk"]}>
                <GoHeart className={styles["wa-careers-perk-icon"]} />
                <h3>Health & Wellness Packages</h3>
                <p>Medical care and wellness support.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>

              <div className={styles["wa-careers-perk"]}>
                <GoPeople className={styles["wa-careers-perk-icon"]} />
                <h3>Talent Nurturing Community</h3>
                <p>Helping employees grow and explore new skills.</p>
                <span className={styles["wa-careers-perk-line"]} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
    THE HEART OF OUR SUCCESS
=============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-careers-heart"]}>
          <div className={styles["wa-careers-heart-container"]}>
            <h2 className={styles["wa-careers-heart-title"]}>
              The Heart of Our Success
            </h2>

            <p className={styles["wa-careers-heart-desc"]}>
              An insight into the vibrant experiences not only contributes to
              our success but also highlights the core values of our supportive
              environment. Delve into the heartfelt words of our employees and
              explore what makes our workplace truly exceptional.
            </p>

            <div className={styles["wa-careers-video-wrapper"]}>
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="The Heart of Our Success"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent {...animProps}>
        <ClientsImg />
      </AnimatedContent>
      <AnimatedContent {...animProps}>
        <TrustSection />
      </AnimatedContent>
      <AnimatedContent {...animProps}>
        <Insights />
      </AnimatedContent>
    </>
  );
};

/* ---------- Helpers ---------- */
const OpeningAccordion = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles['wa-opening-category']}>
      <button className={styles['wa-opening-header']} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <GoChevronDown className={open ? styles['rotate'] : ""} />
      </button>

      {open && (
        <div className={styles['wa-opening-content']}>
          <p>{description}</p>

          <a href="/careers/apply" className={styles['wa-apply-btn']}>
            Apply now <GoArrowRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default Careers;
