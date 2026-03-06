// src/components/Case-Studies.jsx

import styles from "./Case-Studies.module.css";
import case1 from "../../assets/images/Case-Studies-images/case-1.webp";
import { GoArrowRight } from "react-icons/go";

export default function CaseStudies() {
  const caseStudiesData = [
    {
      id: 1,
      img: case1,
      title: "Case Studies",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      img: case1,
      title: "Case Studies2",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      img: case1,
      title: "Case Studies3",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 4,
      img: case1,
      title: "Case Studies4",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 5,
      img: case1,
      title: "Case Studies5",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 6,
      img: case1,
      title: "Case Studies6",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  return (
    <>
      <section className={styles['home-case-studies-section']}>
        <h2 className={styles['head-text']}>Case Studies</h2>

        <div className={styles['Home-case-studies-container']}>
          {caseStudiesData.map((item) => {
            return (
              <div key={item.id} className={styles['Home-case-studies-item']}>
                <div className={styles['Home-case-studies-item-img']}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles['Home-case-studies-item-text']}>
                  <h3 className={styles['sub-head-text']}>{item.title}</h3>
                  <p className={styles['sub-para-text']}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['case-studies-btn-container']}>
          <a href="/" className={styles['white-bg-btn']}>
            Our Works <GoArrowRight className={styles['arrow-icon']} />
          </a>
        </div>
      </section>
    </>
  );
}
