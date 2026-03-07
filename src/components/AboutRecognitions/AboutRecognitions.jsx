import React from "react";
import styles from "./AboutRecognitions.module.css";

// Images (Will be scraped/downloaded in the next step, assuming format below)
// import img1 from "../../assets/images/Recognitions/1.png";
import img3 from "../../assets/images/Recognitions/3.png";
import img4 from "../../assets/images/Recognitions/4.png";
import img6 from "../../assets/images/Recognitions/6.png";
import img9 from "../../assets/images/Recognitions/9.png"; // Assuming jpeg might be png when downloaded or we stick to exact same name

const partnersImages = [img3, img4, img6, img9];

export default function AboutRecognitions() {
  return (
    <>
      <section className={`${styles['recognitions-section']} ${styles['partners-section']}`}>
        <div className={styles['recognitions-container']}>
          <div className={styles['recognitions-text-col']}>
            <h2 className={styles['head-text']}>
              Your Goals Our <br /> Priority
            </h2>
            <p className={styles['sub-para-text']}>
              receive priority treatment for urgent tasks, with an average
              response time of 24 hours for high-priority clients
            </p>
          </div>

          <div className={styles['recognitions-marquee-col']}>
            <div className={styles['recognitions-marquee-track']}>
              {partnersImages.map((img, index) => (
                <div key={`param-${index}`} className={styles['recognition-item']}>
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className={styles['recognition-img']}
                  />
                </div>
              ))}
              {partnersImages.map((img, index) => (
                <div key={`dup-${index}`} className={styles['recognition-item']}>
                  <img
                    src={img}
                    alt={`Partner Duplicate ${index + 1}`}
                    className={styles['recognition-img']}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
