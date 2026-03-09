import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";

import img1 from "../../assets/images/Home-images/banner-images/1.webp";
import newImg from "../../assets/images/Home-images/banner-images/digital-marketing.jpg";
import vid1 from "../../assets/videos/banner-video/Web-anatomy-showreel.mp4";
import styles from "./HomeCarosule.module.css";

gsap.registerPlugin(ScrollTrigger);

const HomeCarosule = () => {
  /* ----------------------------------
     SLIDES DATA
  ---------------------------------- */
  const slides = useMemo(
    () => [
      {
        title: "Story Reel",
        thumbnail: img1,
        heading: "Design. Disrupt. Deliver",
        subheading: "Find Clarity in Chaos",
        description: "Cutting-edge solutions tailored to your business needs",
        button: "Explore Service",
        link: "/services",
        videoSrc: vid1,
      },
      {
        title: "Brand Journey",
        thumbnail: newImg,
        heading: "Built to scale.",
        subheading: "Designed to win.",
        description: "From vision to visuals, we shape your brand identity.",
        button: "View Casestudy",
        link: "/blog",
        imageSrc: newImg,
      },
      {
        title: "Creative Impact",
        thumbnail: newImg,
        heading: "Minimal, Bold, Strategic",
        subheading: "Let’s Build Something Bold, Something Strong",
        description: "Engaging designs backed by impactful storytelling.",
        button: "Schedule a Quick Call",
        link: "/contact",
        imageSrc: newImg,
      },
      {
        title: "Creative Meets Strategy",
        thumbnail: newImg,
        heading: "Creative Meets Strategy",
        subheading: "Design. Disrupt. Deliver",
        description: "Engaging designs backed by impactful storytelling.",
        button: "Explore Services",
        link: "/services",
        imageSrc: newImg,
      },
    ],
    []
  );

  /* ----------------------------------
     STATE & REFS
  ---------------------------------- */
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRefs = useRef(slides.map(() => React.createRef()));
  const progressBarRefs = useRef(slides.map(() => React.createRef()));
  const overlayRef = useRef(null);

  /* ----------------------------------
     GSAP SCROLL OVERLAY
  ---------------------------------- */
  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.to(overlayRef.current, {
      backgroundColor: "black",
      duration: 3,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "45% top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  /* ----------------------------------
     VIDEO/IMAGE PLAY + PROGRESS BAR SYNC
  ---------------------------------- */
  useEffect(() => {
    const currentSlide = slides[currentIndex];
    const currentVideo = videoRefs.current[currentIndex]?.current;
    const currentBar = progressBarRefs.current[currentIndex]?.current;

    if (!currentBar) return;

    // Pause & reset all videos
    videoRefs.current.forEach((ref, i) => {
      const video = ref.current;
      if (video) {
        if (i !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });

    // Reset all progress bars
    progressBarRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.innerHTML = "";
        ref.current.classList.remove(styles.active);
      }
    });

    // Setup active progress bar
    currentBar.classList.add(styles.active);
    const fill = document.createElement("div");
    fill.className = styles["bar-fill"];
    currentBar.appendChild(fill);

    let rafId;
    let imageTimeout;

    if (currentSlide.videoSrc && currentVideo) {
      // HANDLE VIDEO
      const updateProgress = () => {
        if (currentVideo.duration) {
          fill.style.width = `${
            (currentVideo.currentTime / currentVideo.duration) * 100
          }%`;
        }
        rafId = requestAnimationFrame(updateProgress);
      };

      const handleEnded = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      };

      currentVideo.addEventListener("ended", handleEnded);
      currentVideo.play().catch(() => {});
      rafId = requestAnimationFrame(updateProgress);

      return () => {
        cancelAnimationFrame(rafId);
        currentVideo.removeEventListener("ended", handleEnded);
      };
    } else {
      // HANDLE IMAGE (Fixed 5 seconds duration)
      const duration = 5000;
      const startTime = performance.now();

      const updateProgress = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        fill.style.width = `${progress}%`;

        if (progress < 100) {
          rafId = requestAnimationFrame(updateProgress);
        }
      };

      rafId = requestAnimationFrame(updateProgress);

      imageTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, duration);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(imageTimeout);
      };
    }
  }, [currentIndex, slides]);

  /* ----------------------------------
     JSX
  ---------------------------------- */
  return (
    <div className={styles['wac-video-carousel']}>
      <div ref={overlayRef} className={styles['whole-overlay']} />

      {/* VIDEOS */}
      <div className={styles['wac-carousel-track']}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles['wac-slide']} ${index === currentIndex ? styles.active : ""}`}
          >
            {slide.videoSrc ? (
              <video
                ref={videoRefs.current[index]}
                className={styles["wac-video-bg"]}
                muted
                playsInline
                preload="auto"
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className={styles["wac-video-bg"]}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* LEFT CONTENT */}
      <div className={styles['wac-overlay']}>
        <div className={`${styles['wac-content']} ${styles['left-align']}`}>
          <h2 className={styles['wac-heading']}>{slides[currentIndex].heading}</h2>
          <h3 className={styles['wac-subheading']}>{slides[currentIndex].subheading}</h3>
          <p className={styles['wac-description']}>{slides[currentIndex].description}</p>

          <a href={slides[currentIndex].link} className={styles['wac-cta-button']}>
            {slides[currentIndex].button}
            <GoArrowRight className={styles['arrow-icon']} />
          </a>
        </div>
      </div>

      {/* RIGHT CTA + PROGRESS */}
      <div className={styles['wac-right-cta']}>
        <div className={styles['wac-thumbnail']}>
          <img
            src={slides[(currentIndex + 1) % slides.length].thumbnail}
            alt="Next thumbnail"
          />
        </div>

        <div className={styles['wac-cta-details']}>
          <div>
            <span className={styles['wac-next']}>Next</span>
            <h3 className={styles['wac-title']}>
              {slides[(currentIndex + 1) % slides.length].title}
            </h3>
          </div>

          <div className={styles['wac-pagination']}>
            {slides.map((_, index) => (
               <div
                key={index}
                ref={progressBarRefs.current[index]}
                className={styles['wac-progress-bar']}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarosule;
