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
import img12 from "../../assets/portfolio/12.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Mogo Ready Template",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/template-layout/",
    description:
      "A company portfolio written with HTML, CSS and jQuery using a ready psd template.",
  },
  {
    id: 2,
    image: img2,
    title: "React Calculator",
    github: "https://github.com",
    demo: "https://react-app-calc20.herokuapp.com/",
    description: "Minimalistic React Calculator with Clear function.",
  },
  {
    id: 3,
    image: img3,
    title: "Sweet Portfolio",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/Lyudmila-Yakovleva/index.html",
    description: "The very first project in vanilla JS. A portfolio for baker.",
  },
  {
    id: 4,
    image: img4,
    title: "Bootstrap in React",
    github: "https://github.com",
    demo: "https://react-app-bootstrap2738.herokuapp.com/",
    description: "A simple Sign In page made with Bootstrap.",
  },
  {
    id: 5,
    image: img5,
    title: "Seabattle",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/seabattle/",
    description:
      "A classic Seabattle/Battleship game for one person made in Phaser.",
  },
  {
    id: 6,
    image: img6,
    title: "Holiday Counter",
    github: "https://github.com",
    demo: "https://rococo-starlight-64da6d.netlify.app/",
    description:
      "The first team project to keep track on favourite sweet holidays using localstorage.",
  },
  {
    id: 7,
    image: img7,
    title: "Quiz",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/Twinder/",
    description:
      "The second team project with login & register page using Firebase.",
  },
  {
    id: 8,
    image: img8,
    title: "Bootstrap in Vanilla JS",
    github: "https://github.com",
    demo: "https://brilliant-sorbet-c8f5e5.netlify.app",
    description: "Slider made with Bootstrap and vanilla JS.",
  },
  {
    id: 9,
    image: img9,
    title: "Responsive Web",
    github: "https://github.com",
    demo: "https://unique-cobbler-e87ff0.netlify.app/",
    description:
      "A responsive website with media queries adjusted to printing.",
  },
  {
    id: 10,
    image: img10,
    title: "MERN Sneakers",
    github: "https://github.com",
    demo: "https://unique-bombolone-cb639e.netlify.app/",
    description:
      "A sneakers MERN web with favourite feature deployed as a monorepo in Heroku and Netlify.",
  },
  {
    id: 11,
    image: img11,
    title: "Vanilla JS",
    github: "https://github.com",
    demo: "https://kaleidoscopic-ganache-2f7410.netlify.app/",
    description: "Several vanilla JS projects as a part of JavaScript30.",
  },
  {
    id: 12,
    image: img12,
    title: "Swedish Radio API",
    github: "https://github.com",
    demo: "https://elinahulbert.github.io/Swedish-radio-API/",
    description: "A Vanilla JS App based on Swedish Radio API.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <p className="description">{description}</p>
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
