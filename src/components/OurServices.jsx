// src/components/OurServices.jsx

import React from "react";
import "../css/OurServices.css";
import serviceImg1 from "../assets/images/Our-services/service-1.webp";
import serviceImg2 from "../assets/images/Our-services/service-2.webp";
import serviceImg3 from "../assets/images/Our-services/service-3.webp";
import serviceImg4 from "../assets/images/Our-services/service-4.webp";
import serviceImg5 from "../assets/images/Our-services/service-5.webp";
import serviceImg6 from "../assets/images/Our-services/service-6.webp";

import { GoArrowRight } from "react-icons/go";

const services = [
  {
    id: 1,
    title: "Branding",
    description:
      "Craft bold brand identities that speak, stick, and scale with our branding solutions. Stand out from the crowd and leave a lasting impression.",
    image: serviceImg1,
  },
  {
    id: 2,
    title: "UI/UX design",
    description:
      "Designing intuitive, user-first experiences that drive real engagement. Convert visitors into customers and make a lasting impact.",
    image: serviceImg2,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Building e-com platforms that convert browsers into loyal buyers. Powerful online store so effective that it drives sales + boosts your bottom line.",
    image: serviceImg3,
  },
  {
    id: 4,
    title: "Ecommerce",
    description:
      "Results-driven marketing strategies that amplify your reach and ROI. We target the right audience to grow your brand.",
    image: serviceImg4,
  },
  {
    id: 5,
    title: "Web App development",
    description:
      "From MVP to enterprise — we build powerful, scalable web applications that solve real problems and drive growth.",
    image: serviceImg5,
  },
  {
    id: 6,
    title: "Mobile App development",
    description:
      "Seamless mobile experiences, built for speed and performance. We create apps that users love to use every day.",
    image: serviceImg6,
  },
];

export default function OurServices() {
  return (
    <div className="our-services">
      <p className="sub-para-text">Work with people who think differently</p>
      <h2 className="head-text">Explore our superpowers</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="sub-head-text">{service.title}</h3>
              <p className="sub-para-text">{service.description}</p>
              <button className="transparent-bg-btn">
                Learn More <GoArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="ourservices-btn-container">
        <a href="/" className="white-bg-btn" style={{ marginTop: "50px" }}>
          View All Services <GoArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  );
}
