import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "../css/AboutPageOurStory.css";

const AboutPageOurStory = () => {
  return (
    <section className="wa-our-story-section">
      {/* Header Section */}
      <div className="wa-our-story-title-wrapper">
        <h2 className="head-text">Our Story</h2>
        <p className="para-text wa-our-story-desc">
          From humble origins to global trailblazers - the transformational
          journey of an Indian startup from a small town in Kerala, that moulded
          itself into a global technology game changer and now stands out from
          its peers. Our story is worth a good read!
        </p>
      </div>

      {/* Grid Content */}
      <div className="wa-our-story-grid">
        {/* Card 1: Our Purpose */}
        <div className="wa-story-card">
          <div className="wa-story-card-image wa-bg-purpose"></div>
          <h3 className="sub-head-text">Our Purpose</h3>
          <p className="sub-para-text">
            To deliver experiences that change the way your customers feel about
            your business
          </p>
          <Link
            to="/about/purpose"
            className="transparent-bg-btn wa-story-link-btn"
          >
            Learn more <BsArrowRight className="arrow-icon" />
          </Link>
        </div>

        {/* Card 2: Our Team */}
        <div className="wa-story-card">
          <div className="wa-story-card-image wa-bg-team"></div>
          <h3 className="sub-head-text">Our Team</h3>
          <p className="sub-para-text">
            Holistic leadership, holistic growth! A team of visionaries
            connected by shared commitments for a unified vision
          </p>
          <Link
            to="/about/team"
            className="transparent-bg-btn wa-story-link-btn"
          >
            Learn more <BsArrowRight className="arrow-icon" />
          </Link>
        </div>

        {/* Card 3: Awards */}
        <div className="wa-story-card">
          <div className="wa-story-card-image wa-bg-awards"></div>
          <h3 className="sub-head-text">Awards & Recognitions</h3>
          <p className="sub-para-text">
            Prestigious accolades that validated our excellence and commitment
            to innovation.
          </p>
          {/* Note: Content inferred/placeholder as image text was cut off slightly or generic */}
          <Link
            to="/about/awards"
            className="transparent-bg-btn wa-story-link-btn"
          >
            Learn more <BsArrowRight className="arrow-icon" />
          </Link>
        </div>

        {/* Card 4: Our Brands */}
        <div className="wa-story-card">
          <div className="wa-story-card-image wa-bg-brands"></div>
          <h3 className="sub-head-text">Our Brands</h3>
          <p className="sub-para-text">
            Building strong identities that resonate and leave a lasting
            impression.
          </p>
          <Link
            to="/about/brands"
            className="transparent-bg-btn wa-story-link-btn"
          >
            Learn more <BsArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageOurStory;
