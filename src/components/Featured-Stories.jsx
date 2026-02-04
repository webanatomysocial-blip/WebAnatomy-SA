import "../css/Featured-Stories.css";

export default function FeaturedStories() {
    const featuredStoriesData = [
        {
            id:1,
            img:"",
            subHead:"",
            title:"",
            description:"",
            link:"",
            
        }
    ]
  return (
    <>
      <section className="home-featured-stories-section">
        <h2 className="head-text">Featured Stories</h2>
        <p className="para-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className="home-featured-stories-container">
            <div className="home-featured-stories-item-container">
                {
                    featuredStoriesData.map((item) => {
                        return (
                            <div className="home-featured-stories-item">
                                <img src={item.img} alt="" />
                                <h3 className="head-text">{item.title}</h3>
                                <p className="para-text">{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
      </section>
    </>
  );
}
