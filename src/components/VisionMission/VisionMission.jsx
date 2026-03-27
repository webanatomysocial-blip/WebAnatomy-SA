import React from 'react';
import styles from './VisionMission.module.css';
import { AnimatedScrollText } from './AnimatedScrollText';
import visionImg from '../../assets/about-page/our-story/vision.png';
import missionImg from '../../assets/about-page/our-story/mission.png';

const visionText = `Our vision is to become a trusted digital growth partner for businesses worldwide, empowering brands to thrive in an ever-evolving digital landscape. We aim to create impactful, scalable, and future-ready solutions that help businesses stand out, adapt, and succeed. By combining innovation, strategy, and creativity, we strive to shape a future where every business, regardless of size, has the tools, presence, and confidence to achieve sustainable growth and long-term success.`;

const missionText = `Our mission is to deliver strategic, data-driven digital solutions that help businesses grow, compete, and succeed in today’s dynamic market. We combine creativity, technology, and performance-focused strategies to create meaningful digital experiences that drive measurable results. By understanding each client’s unique goals, we provide tailored solutions that enhance visibility, generate leads, and maximize return on investment. We are committed to building strong partnerships, maintaining transparency, and continuously optimizing our approach to ensure consistent, long-term business growth.`;

export default function VisionMission() {
    return (
        <section className={styles["vision-mission-section"]}>
            <div className={styles["vision-mission-container"]}>

                {/* Vision Card */}
                <div className={styles["vm-card"]}>
                    <div className={styles["vm-tag"]}>
                        <span className={styles["vm-diamond"]}>✦</span> VISION
                    </div>

                    <div className={styles["vm-image-placeholder"]}>
                        <img src={visionImg} alt="Vision" />
                    </div>

                    <div className={styles["vm-text"]}>
                        <AnimatedScrollText text={visionText} />
                    </div>
                </div>

                {/* Mission Card */}
                <div className={styles["vm-card"]}>
                    <div className={styles["vm-tag"]}>
                        <span className={styles["vm-diamond"]}>✦</span> MISSION
                    </div>

                    <div className={styles["vm-image-placeholder"]}>
                        <img src={missionImg} alt="Mission" />
                    </div>

                    <div className={styles["vm-text"]}>
                        <AnimatedScrollText text={missionText} />
                    </div>
                </div>

            </div>
        </section>
    );
}
