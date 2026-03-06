import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./ClientsDifference.module.css";
import AnimatedLetterHeading from "../AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "CEO, NexaTech Solutions",
    quote:
      "WebAnatomy didn't just build a website; they engineered a digital experience. Their focus on high-performance engineering and sophisticated design transformed our user engagement metrics overnight.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head of Product, Bloom Media",
    quote:
      "The UI/UX expertise the team brought to our project was unmatched. They have an incredible ability to balance complex functionality with elegant, premium aesthetics. Truly a design-led agency.",
  },
  {
    id: 3,
    name: "Amara Okoro",
    role: "Director of Brand, Zenith Global",
    quote:
      "Working with WebAnatomy on our brand identity design was seamless. They deep-dived into our core values and delivered a visual language that perfectly captures our 'sophisticated' edge.",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <main className={styles["hear-from-container"]}>
      <AnimatedContent>
        <div className={styles["testimonials-wrapper"]}>
          {/* Left Column */}
          <div className={styles["testimonials-info"]}>
            {/* <div className={styles["testimonials-badge-wrapper"]}>
              <span className={`${styles["testimonials-badge"]} sub-small-para`}>Testimonials</span>
            </div> */}
            <AnimatedLetterHeading
              text="Client Experiences|That Speak for Themselves"
              tag="h2"
              className={styles["testimonials-heading"]}
            />

            <div className={styles["testimonials-left-bottom"]}>
              <button className={`${styles["sme-btn"]} white-bg-btn`}>Talk to our SMEs<span className="icon-btn">
                <BsArrowRight className="icon-inside-btn-1" />
                <BsArrowRight className="icon-inside-btn-2" />
              </span></button>
              <div className={styles["ratings-container"]}>
                <div className={styles["rating-item"]}>
                  <span className={styles["rating-label"]}>Reviewed on <br />Peer Insights</span>
                  <div className={styles["rating-stars"]}>★★★★★</div>
                </div>
                <div className={styles["rating-item"]}>
                  <span className={styles["rating-label"]}>Gartner <br />Approved</span>
                  <div className={styles["rating-stars"]}>★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Swiper */}
          <div className={styles["testimonials-carousel"]}>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="testimonialSwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className={styles["testimonial-card"]}>
                    <div className={styles["card-top"]}>
                      <div className={styles["quote-icon"]}>“</div>
                      <p className="para-text">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className={styles["testimonial-footer"]}>
                      <div className={styles["author-info"]}>
                        <span className={`${styles["author-name"]} sub-small-head-white`}>{testimonial.name}</span>
                        <span className={`${styles["author-role"]} sub-small-para`}>{testimonial.role}</span>
                      </div>

                      <div className={styles["nav-buttons"]}>
                        <button
                          className={`${styles["nav-btn"]} ${styles["prev-btn"]}`}
                          onClick={() => swiperRef.current?.slidePrev()}
                          aria-label="Previous testimonial"
                        >
                          <BsArrowLeft />
                        </button>
                        <button
                          className={`${styles["nav-btn"]} ${styles["next-btn"]}`}
                          onClick={() => swiperRef.current?.slideNext()}
                          aria-label="Next testimonial"
                        >
                          <BsArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </AnimatedContent>
    </main>
  );
}