import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio/1.png";
import img2 from "../../assets/portfolio/2.png";
import img3 from "../../assets/portfolio/3.png";
import img4 from "../../assets/portfolio/4.png";
import img5 from "../../assets/portfolio/5.png";
import img6 from "../../assets/portfolio/6.png";
import img7 from "../../assets/portfolio/7.png";
import img8 from "../../assets/portfolio/8.png";
import img9 from "../../assets/portfolio/9.png";
import img10 from "../../assets/portfolio/10.png";
import img11 from "../../assets/portfolio/11.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Mogo Ready Template",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/template-layout/",
  },
  {
    id: 2,
    image: img2,
    title: "React Calculator",
    github: "https://github.com",
    demo: "https://react-app-calc20.herokuapp.com/",
  },
  {
    id: 3,
    image: img3,
    title: "Sweet Portfolio",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/Lyudmila-Yakovleva/index.html",
  },
  {
    id: 4,
    image: img4,
    title: "Bootstrap in React",
    github: "https://github.com",
    demo: "https://react-app-bootstrap2738.herokuapp.com/",
  },
  {
    id: 5,
    image: img5,
    title: "A Phaser Game",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/seabattle/",
  },
  {
    id: 6,
    image: img6,
    title: "Holiday Counter",
    github: "https://github.com",
    demo: "https://rococo-starlight-64da6d.netlify.app/",
  },
  {
    id: 7,
    image: img7,
    title: "Quiz",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/Twinder/",
  },
  {
    id: 8,
    image: img8,
    title: "Bootstrap in Vanilla JS",
    github: "https://github.com",
    demo: "https://brilliant-sorbet-c8f5e5.netlify.app",
  },
  {
    id: 9,
    image: img9,
    title: "Responsive Web",
    github: "https://github.com",
    demo: "https://unique-cobbler-e87ff0.netlify.app/",
  },
  {
    id: 10,
    image: img10,
    title: "MERN Sneakers",
    github: "https://github.com",
    demo: "https://www.instagram.com/p/B6Wa_VqDFcA/",
  },
  {
    id: 11,
    image: img11,
    title: "Vanilla JS",
    github: "https://github.com",
    demo: "https://kaleidoscopic-ganache-2f7410.netlify.app/",
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
