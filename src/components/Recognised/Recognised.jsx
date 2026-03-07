import styles from './Recognised.module.css';
import AnimatedContent from '../AnimatedContent/AnimatedContent';
import rec1 from "../../assets/images/Recognitions/reco 1.png";
import rec2 from "../../assets/images/Recognitions/rec2.avif";
import rec3 from "../../assets/images/Recognitions/rec 3.avif";
import rec4 from "../../assets/images/Recognitions/rec 4.avif";
import rec5 from "../../assets/images/Recognitions/rec 5.avif";


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
                            <img src={rec2} alt="Most Trusted Agency" title="Most Trusted Agency" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec3} alt="Most Trusted Agency" title="Most Trusted Agency" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec4} alt="Most Trusted Agency" title="Most Trusted Agency" />
                        </div>
                        <div className={styles["rec-logo-box"]}>
                            <img src={rec5} alt="Women Story" title="Women Story" />
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};

export default Recognised;
