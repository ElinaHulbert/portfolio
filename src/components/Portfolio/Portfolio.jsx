import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio/1.png";
import img2 from "../../assets/portfolio/2.png";
import img3 from "../../assets/portfolio/3.png";
import img4 from "../../assets/portfolio/4.png";
import img5 from "../../assets/portfolio/5.png";
import img6 from "../../assets/portfolio/6.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 2,
    image: img2,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 3,
    image: img3,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 4,
    image: img4,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 5,
    image: img5,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 6,
    image: img6,
    title: "First",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
