import styles from "./Perspective.module.css";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import img1 from "../../assets/images/about-page/our-story/93420.jpg";
import img2 from "../../assets/about-page/perspective/vibe-coding.webp";
import img3 from "../../assets/about-page/perspective/future-first.webp";
import img4 from "../../assets/about-page/perspective/ethical.jpg";

const Pers = () => {
  return (
    <section className={styles["pers-section"]}>
      <AnimatedContent>
        <div className={styles["pers-container"]}>
          <div className={styles["pers-header"]}>
            <h2 className={styles["pers-title"]}>Our Perspective</h2>
            <p className={styles["pers-desc"]}>
              At Business Anatomy, we believe the future of creativity is not
              artificial it's amplified. We fuse human intuition with
              intelligent systems to craft experiences.
            </p>
          </div>

          <div className={styles["pers-cards-wrapper"]}>
            {/* Card 1 */}
            <div className={styles["pers-card"]}>
              <img
                src={img1}
                alt="Human x Machine"
                className={styles["pers-card-bg"]}
              />
              <div className={styles["pers-card-content"]}>
                <h3 className={styles["pers-card-title"]}>
                  Human ×<br />
                  Machine
                </h3>
                <p className={styles["pers-card-hover-text"]}>
                  Design is more than function. It's energy, emotion, and rhythm
                  — translated into product form.
                </p>
                <div className={styles["pers-card-bottom"]}>
                  <div className={styles["pers-card-line"]}></div>
                  <span className={styles["pers-card-number"]}>01</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles["pers-card"]}>
              <img
                src={img2}
                alt="Vibe Coding"
                className={styles["pers-card-bg"]}
              />
              <div className={styles["pers-card-content"]}>
                <h3 className={styles["pers-card-title"]}>Vibe Coding</h3>
                <p className={styles["pers-card-hover-text"]}>
                  Design is more than function. It's energy, emotion, and rhythm
                  — translated into product form.
                </p>
                <div className={styles["pers-card-bottom"]}>
                  <div className={styles["pers-card-line"]}></div>
                  <span className={styles["pers-card-number"]}>02</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles["pers-card"]}>
              <img
                src={img3}
                alt="Future-First Thinking"
                className={styles["pers-card-bg"]}
              />
              <div className={styles["pers-card-content"]}>
                <h3 className={styles["pers-card-title"]}>
                  Future-First
                  <br />
                  Thinking
                </h3>
                <p className={styles["pers-card-hover-text"]}>
                  Design is more than function. It's energy, emotion, and rhythm
                  — translated into product form.
                </p>
                <div className={styles["pers-card-bottom"]}>
                  <div className={styles["pers-card-line"]}></div>
                  <span className={styles["pers-card-number"]}>03</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles["pers-card"]}>
              <img
                src={img4}
                alt="Ethical Intelligence"
                className={styles["pers-card-bg"]}
              />
              <div className={styles["pers-card-content"]}>
                <h3 className={styles["pers-card-title"]}>
                  Ethical
                  <br />
                  Intelligence
                </h3>
                <p className={styles["pers-card-hover-text"]}>
                  Design is more than function. It's energy, emotion, and rhythm
                  — translated into product form.
                </p>
                <div className={styles["pers-card-bottom"]}>
                  <div className={styles["pers-card-line"]}></div>
                  <span className={styles["pers-card-number"]}>04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Pers;
