import styles from "./AboutOurStory.module.css";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import img1 from "../../assets/about-page/our-story/pic1.jpg";
import img2 from "../../assets/about-page/our-story/pic2.jpg";
import img3 from "../../assets/about-page/our-story/pic3.jpg";

export default function AboutOurStory() {
    return (
       <>
        <div className={styles["about-our-story"]}>
            <AnimatedContent>
                <div className={styles["about-headings"]}>
                    <h1>Our Story The Story Behind the Magic</h1>
                    <p>We are not pixel pushers or code monkeys. At Web Anatomy, we let our creativity lead the way, but we know where we're headed, and there's a purpose to everything we do. We're just a bunch of talented, creative people aspiring to do incredible things together and have some fun along the way.</p>
                </div>
                <div className={styles["about-images"]}>
                    <img src={img1} alt="Our Story 1" />
                    <img src={img2} alt="Our Story 2" />
                    <img src={img3} alt="Our Story 3" />
                </div>
            </AnimatedContent>
        </div>
       </>
    );
}
