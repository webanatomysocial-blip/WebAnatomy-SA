import React from "react";
import { GoArrowRight } from "react-icons/go";
import styles from "./Insights.module.css";

// Placeholder image (replace with your actual assets)
import Insight1 from "../../assets/images/insights/How_to_Use_Laravel_with_React_for_Building_Modern_Web_Applications_501b34617b.webp"; 
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
    <section className={styles['insights-section']}>
      <div className={styles['insights-container']}>
        <h2 className={`${styles['head-text']} ${styles['insights-heading']}`}>Insights</h2>
        
        <div className={styles['insights-grid']}>
          {insightsData.map((post) => (
            <a key={post.id} href={post.link} className={styles['insight-card']}>
              <div className={styles['insight-image-wrapper']}>
                <img src={post.image} alt={post.title} className={styles['insight-img']} />
              </div>
              <div className={styles['insight-content']}>
                <h3 className={styles['insight-title']}>{post.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className={styles['insights-footer']}>
          <a href="/insights" className={styles['white-bg-btn']}>
            Explore all insights <GoArrowRight className={styles['arrow-icon']} />
          </a>
        </div>
      </div>
    </section>
  );
}
