import styles from './Approach.module.css';
import AnimatedContent from '../AnimatedContent/AnimatedContent';

const cards = [
    {
        bg: styles["bg-light-green"],
        emoji: "🌿",
        title: "Empathy and compassion",
        desc: "We're not just digital wizards; we're also expert mind-readers. Your success is our success, and we'll stop at nothing to make your dreams come true.",
    },
    {
        bg: styles["bg-light-pink"],
        emoji: "🤝",
        title: "Teamwork",
        desc: "We believe in the power of collaboration. Like a well-oiled machine (with a touch of magic), our team works together seamlessly to bring your vision to life.",
    },
    {
        bg: styles["bg-light-yellow"],
        emoji: "🎨",
        title: "Playfulness",
        desc: "Work hard, play hard! At Web Anatomy, we're not afraid to have a little fun along the way. After all, creativity knows no bounds!",
    },
    {
        bg: styles["bg-light-blue"],
        emoji: "🚀",
        title: "Ambition",
        desc: "We dream big and aim high. With passion and determination, anything is possible. Your success is our mission, and we won't rest until we've conquered the digital world!",
    },
];

const Approach = () => {
    return (
        <div className={styles["principles-section"]}>
            <AnimatedContent>
                <div className={styles["principles-headings"]}>
                    <h1>Principles That Shape<br />Every Conversation</h1>
                </div>

                <div className={styles["principles-grid"]}>
                    {cards.map((card, i) => (
                        <div key={i} className={styles["principle-card"]}>
                            <div className={`${styles["principle-icon"]} ${card.bg}`}>
                                <span style={{ fontSize: "3rem" }}>{card.emoji}</span>
                            </div>
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContent>
        </div>
    );
};

export default Approach;
