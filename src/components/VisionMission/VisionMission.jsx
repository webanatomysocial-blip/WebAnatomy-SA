import React, { useRef } from 'react';
import styles from './VisionMission.module.css';
import AnimatedContent from '../AnimatedContent/AnimatedContent';
import { AnimatedScrollText } from './AnimatedScrollText';
import visionImg from '../../assets/about-page/our-story/vision.png';
import missionImg from '../../assets/about-page/our-story/mission.png';

const visionText = `To become a trusted creative partner helping brands grow through impactful design and result-driven digital marketing.`;

const missionText = `To deliver innovative design, strategic marketing, and high-performing digital experiences that help businesses build strong brands and achieve measurable growth.`;

export default function VisionMission() {
    const visionCardRef = useRef(null);
    const missionCardRef = useRef(null);

    return (
        <div className={styles["vision-mission-section"]}>
            <AnimatedContent>
                <div className={styles["vision-mission-container"]}>

                    {/* Vision Card */}
                    <div className={styles["vm-card"]} ref={visionCardRef}>
                        <div className={styles["vm-tag"]}>
                            <span className={styles["vm-diamond"]}>✦</span> VISION
                        </div>

                        <div className={styles["vm-image-placeholder"]}>
                            <img src={visionImg} alt="Vision" />
                        </div>

                        <div className={styles["vm-text"]}>
                            <AnimatedScrollText text={visionText} triggerRef={visionCardRef} />
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className={styles["vm-card"]} ref={missionCardRef}>
                        <div className={styles["vm-tag"]}>
                            <span className={styles["vm-diamond"]}>✦</span> MISSION
                        </div>

                        <div className={styles["vm-image-placeholder"]}>
                            <img src={missionImg} alt="Mission" />
                        </div>

                        <div className={styles["vm-text"]}>
                            <AnimatedScrollText text={missionText} triggerRef={missionCardRef} />
                        </div>
                    </div>

                </div>
            </AnimatedContent>
        </div>
    );
}
