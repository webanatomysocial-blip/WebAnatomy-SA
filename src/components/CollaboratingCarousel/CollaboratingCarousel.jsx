import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./CollaboratingCarousel.module.css";

// Dynamically import all logos from Clients-logos
const logoImages = import.meta.glob('../../assets/images/Clients-logos/*.{png,jpg,jpeg,webp}', { eager: true });
const clientLogos = Object.values(logoImages).map((module) => module.default);

export default function CollaboratingCarousel() {
  return (
    <section className={styles['collaborating-section']}>
      <div className={styles['collaborating-content']}>
        <h2 className={styles['collaborating-heading']}>
          Collaborating with 50+ Industry Leaders
        </h2>
        
        <div className={styles['collaborating-marquee']}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView="auto"
            loop={true}
            allowTouchMove={false}
            speed={5000} // Linear speed for marquee effect
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className={styles['collaborating-swiper']}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index} className={styles['logo-slide']}>
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className={styles['partner-logo']}
                />
              </SwiperSlide>
            ))}
            {/* Duplicate slides for infinite loop smoothness if needed by Swiper version */}
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={`dup-${index}`} className={styles['logo-slide']}>
                <img
                  src={logo}
                  alt={`Partner Logo Duplicate ${index + 1}`}
                  className={styles['partner-logo']}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
