import styles from './Recognised.module.css';
import AnimatedContent from '../AnimatedContent/AnimatedContent';
import rec1 from "../../assets/images/Recognitions/1.png";
import rec2 from "../../assets/images/Recognitions/2.png";
import rec3 from "../../assets/images/Recognitions/3.png";
import rec4 from "../../assets/images/Recognitions/4.png";
import rec5 from "../../assets/images/Recognitions/5.png";

const Recognised = () => {
    return (
        <section className={styles["rec-section"]}>
            <AnimatedContent>
                <div className={styles["rec-container"]}>
                    <h2 className={styles["rec-heading"]}>Recognized Certifications</h2>

                    <div className={styles["rec-logos-wrapper"]}>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec1} alt="HubSpot Partner" title="HubSpot Partner" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec2} alt="Top Advertising Company" title="Top Advertising Company" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec3} alt="Most Trusted Agency" title="Most Trusted Agency" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec4} alt="Women Story" title="Women Story" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec5} alt="Clutch" title="Clutch" />
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};

export default Recognised;
