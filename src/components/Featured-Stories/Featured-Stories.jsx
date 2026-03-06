import styles from "./Featured-Stories.module.css";

export default function FeaturedStories() {
  const featuredStoriesData = [
    {
      id: 1,
      img: "",
      subHead: "",
      title: "",
      description: "",
      link: "",
    },
  ];
  return (
    <>
      <section className={styles['home-featured-stories-section']}>
        <h2 className={styles['head-text']}>Featured Stories</h2>
        <p className={styles['para-text']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className={styles['home-featured-stories-container']}>
          <div className={styles['home-featured-stories-item-container']}>
            {featuredStoriesData.map((item) => {
              return (
                <div key={item.id} className={styles['home-featured-stories-item']}>
                  <img src={item.img} alt="" />
                  <h3 className={styles['head-text']}>{item.title}</h3>
                  <p className={styles['para-text']}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
