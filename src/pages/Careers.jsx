import React, { useState } from "react";
import "../css/Careers.css";
import ClientsImg from "../components/Clients-img.jsx";
import TrustSection from "../components/TrustSection.jsx";
import Insights from "../components/Insights.jsx";
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
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="wa-careers-hero">
        {/* Background image */}
        <div
          className="wa-careers-hero-bg"

        />

        {/* Overlay */}
        <div className="wa-careers-hero-overlay" />

        {/* Content */}
        <div className="wa-careers-hero-content">
          <h1 className="wa-careers-hero-title">
            Let Our Team
            <br />
            Be Your New Team
          </h1>

          <p className="wa-careers-hero-desc">
            We always strive to make a positive difference in everything. If
            that’s important to you, Webandcrafts would be a good fit.
          </p>

          <a href="#openings" className="wa-careers-hero-btn">
            Current openings <GoArrowRight />
          </a>
        </div>
      </section>

      {/* ===============================
    CURRENT OPENINGS – SIMPLE ACCORDION
=============================== */}
      <section className="wa-careers-openings-advanced">
        <div className="wa-careers-openings-container">
          <h2 className="wa-openings-title">Current Openings</h2>
          <p className="wa-openings-subtext">
            Become part of a high-performing & collaborative team
          </p>

          <div className="wa-openings-accordion">
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

      {/* ===============================
    VALUES – STICKY LEFT / SCROLL RIGHT (CORRECT)
=============================== */}
      <section className="wa-careers-values-sticky">
        <div className="wa-values-inner">
          {/* LEFT (STICKY) */}
          <div className="wa-values-left">
            <h2>
              The Values <br /> We Live By
            </h2>
            <p>
              We make it a priority to keep our values up-front, anywhere and
              everywhere.
            </p>

            <div className="wa-values-arrow">
              <span></span>
              <span></span>
            </div>
          </div>

          {/* RIGHT (SCROLL CONTENT) */}
          <div className="wa-values-right">
            <div className="wa-value-block">
              <span>01</span>
              <h3>Growth</h3>
              <p>
                Our vision is to grow together as an organisation while working
                towards achieving individual and professional goals.
              </p>
            </div>

            <div className="wa-value-block">
              <span>02</span>
              <h3>People</h3>
              <p>
                Our people are the driving force behind all our achievements,
                and we make it a point to give it back to them.
              </p>
            </div>

            <div className="wa-value-block">
              <span>03</span>
              <h3>Balance</h3>
              <p>
                We value life and its intricate balance, ensuring all our people
                are well balanced professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
    PERKS & BENEFITS
=============================== */}
      <section className="wa-careers-perks">
        <div className="wa-careers-perks-container">
          {/* HEADER */}
          <div className="wa-careers-perks-header">
            <h2 className="wa-careers-perks-title">Perks & Benefits</h2>
            <p className="wa-careers-perks-subtext">
              We make our employees' well-being our priority, by providing only
              the best
            </p>
          </div>

          {/* ITEMS */}
          <div className="wa-careers-perks-list">
            <div className="wa-careers-perk">
              <GoGraph className="wa-careers-perk-icon" />
              <h3>Growth Opportunities</h3>
              <p>Keeping our employees growing and prospering is our goal.</p>
              <span className="wa-careers-perk-line" />
            </div>

            <div className="wa-careers-perk">
              <GoCreditCard className="wa-careers-perk-icon" />
              <h3>Competitive Remuneration</h3>
              <p>We recognise and reward employee contributions.</p>
              <span className="wa-careers-perk-line" />
            </div>

            <div className="wa-careers-perk">
              <GoFlame className="wa-careers-perk-icon" />
              <h3>Eco-friendly Workplace</h3>
              <p>Nature-driven spaces that enhance mental wellbeing.</p>
              <span className="wa-careers-perk-line" />
            </div>

            <div className="wa-careers-perk">
              <GoZap className="wa-careers-perk-icon" />
              <h3>Fun Work Environment</h3>
              <p>Positive energy, creativity, and collaboration.</p>
              <span className="wa-careers-perk-line" />
            </div>

            <div className="wa-careers-perk">
              <GoHeart className="wa-careers-perk-icon" />
              <h3>Health & Wellness Packages</h3>
              <p>Medical care and wellness support.</p>
              <span className="wa-careers-perk-line" />
            </div>

            <div className="wa-careers-perk">
              <GoPeople className="wa-careers-perk-icon" />
              <h3>Talent Nurturing Community</h3>
              <p>Helping employees grow and explore new skills.</p>
              <span className="wa-careers-perk-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
    THE HEART OF OUR SUCCESS
=============================== */}
      <section className="wa-careers-heart">
        <div className="wa-careers-heart-container">
          <h2 className="wa-careers-heart-title">The Heart of Our Success</h2>

          <p className="wa-careers-heart-desc">
            An insight into the vibrant experiences not only contributes to our
            success but also highlights the core values of our supportive
            environment. Delve into the heartfelt words of our employees and
            explore what makes our workplace truly exceptional.
          </p>

          <div className="wa-careers-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="The Heart of Our Success"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <ClientsImg />
      <TrustSection />
      <Insights />
    </>
  );
};

/* ---------- Helpers ---------- */
const AccordionItem = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`wa-accordion-item ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)}>
        {title} <GoChevronDown />
      </button>
      {open && <div className="content">Job description goes here.</div>}
    </div>
  );
};

const ValueItem = ({ title }) => (
  <div className="wa-value-item">
    <h3>{title}</h3>
    <p>We encourage continuous learning and long-term growth.</p>
  </div>
);

const OpeningAccordion = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-opening-category">
      <button className="wa-opening-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <GoChevronDown className={open ? "rotate" : ""} />
      </button>

      {open && (
        <div className="wa-opening-content">
          <p>{description}</p>

          <a href="/careers/apply" className="wa-apply-btn">
            Apply now <GoArrowRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default Careers;
