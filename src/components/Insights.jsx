import React from "react";
import { GoArrowRight } from "react-icons/go";
import "../css/Insights.css";

// Placeholder image (replace with your actual assets)
import Insight1 from "../assets/images/insights/How_to_Use_Laravel_with_React_for_Building_Modern_Web_Applications_501b34617b.webp"; 
// Note: You can reuse the image import you already have or add new ones.

const insightsData = [
  {
    id: 1,
    image: Insight1,
    title: "Laravel With React: How to Build Modern Web Applications?",
    link: "/blog/laravel-react-modern-apps",
  },
  {
    id: 2,
    image: Insight1,
    title: "Laravel With React: How to Build Modern Web Applications?",
    link: "/blog/laravel-react-modern-apps-2",
  },
  {
    id: 3,
    image: Insight1,
    title: "Laravel With React: How to Build Modern Web Applications?",
    link: "/blog/laravel-react-modern-apps-3",
  },
];

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-container">
        <h2 className="head-text insights-heading">Insights</h2>
        
        <div className="insights-grid">
          {insightsData.map((post) => (
            <a key={post.id} href={post.link} className="insight-card">
              <div className="insight-image-wrapper">
                <img src={post.image} alt={post.title} className="insight-img" />
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{post.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="insights-footer">
          <a href="/insights" className="white-bg-btn">
            Explore all insights <GoArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
