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
import img13 from "../../assets/portfolio/13.png";
import img14 from "../../assets/portfolio/14.png";
import img15 from "../../assets/portfolio/15.png";
// import img16 from "../../assets/portfolio/16.png";

const data = [
  {
    id: 15,
    image: img15,
    title: "Insurance comparison service development",
    link: "https://happens.se/",
    description:
      "Collaborated with a dynamic development team as a Frontend Intern to develop a responsive and visually engaging website",
  },
  {
    id: 16,
    image: img15,
    title: "Pizza Shop",
    github: "https://github.com/ElinaHulbert/template-layout",
    demo: "https://elinahulbert.github.io/template-layout/",
    description:
      "Pizza shop, made with Redux Toolkit, TypeScript, React Router, React Content Loader, React Pagination, Lodash, SCSS.",
  },
  {
    id: 1,
    image: img1,
    title: "Mogo Ready Template",
    github: "https://github.com/ElinaHulbert/template-layout",
    demo: "https://elinahulbert.github.io/template-layout/",
    description:
      "A company portfolio written with HTML, CSS and jQuery using a ready psd template.",
  },
  {
    id: 2,
    image: img2,
    title: "React Calculator",
    github: "https://github.com/ElinaHulbert/calculatorReact",
    demo: "https://react-app-calc20.herokuapp.com/",
    description: "Minimalistic React Calculator with Clear function.",
  },
  {
    id: 3,
    image: img3,
    title: "Sweet Portfolio",
    github: "https://github.com/ElinaHulbert/Lyudmila-Yakovleva",
    demo: "https://elinahulbert.github.io/Lyudmila-Yakovleva/index.html",
    description: "The very first project in vanilla JS. A portfolio for baker.",
  },
  // {
  //   id: 4,
  //   image: img4,
  //   title: "Bootstrap in React",
  //   github: "https://github.com/ElinaHulbert/sign-in-form",
  //   demo: "https://react-app-bootstrap2738.herokuapp.com/",
  //   description: "A simple Sign In page made with Bootstrap.",
  // },
  {
    id: 5,
    image: img5,
    title: "Seabattle",
    github: "https://github.com/ElinaHulbert/seabattle",
    demo: "https://elinahulbert.github.io/seabattle/",
    description:
      "A classic Seabattle/Battleship game for one person made in Phaser.",
  },
  // {
  //   id: 6,
  //   image: img6,
  //   title: "Holiday Counter",
  //   github: "https://github.com/ElinaHulbert/holiday-countdown",
  //   demo: "https://rococo-starlight-64da6d.netlify.app/",
  //   description:
  //     "The first team project to keep track on favourite sweet holidays using localstorage.",
  // },
  // {
  //   id: 7,
  //   image: img7,
  //   title: "Quiz",
  //   github: "https://github.com/ElinaHulbert/Twinder",
  //   demo: "https://elinahulbert.github.io/Twinder/",
  //   description:
  //     "The second team project with login & register page using Firebase.",
  // },
  // {
  //   id: 8,
  //   image: img8,
  //   title: "Bootstrap",
  //   github: "https://github.com/ElinaHulbert/bootstrap",
  //   demo: "https://brilliant-sorbet-c8f5e5.netlify.app",
  //   description: "Slider made with Bootstrap.",
  // },
  // {
  //   id: 9,
  //   image: img9,
  //   title: "Responsive Web",
  //   github: "https://github.com/ElinaHulbert/responsiveWeb",
  //   demo: "https://unique-cobbler-e87ff0.netlify.app/",
  //   description:
  //     "A responsive website with media queries adjusted to printing.",
  // },
  {
    id: 10,
    image: img10,
    title: "MERN Sneakers",
    github: "https://github.com/ElinaHulbert/react-sneakers",
    demo: "https://unique-bombolone-cb639e.netlify.app/",
    description:
      "A sneakers MERN web with favourite feature deployed as a monorepo in Heroku and Netlify.",
  },
  {
    id: 11,
    image: img11,
    title: "Vanilla JS",
    github: "https://github.com/ElinaHulbert/Vanilla-JS-projects",
    demo: "https://kaleidoscopic-ganache-2f7410.netlify.app/",
    description: "Several vanilla JS projects as a part of JavaScript30.",
  },
  {
    id: 12,
    image: img12,
    title: "Swedish Radio API",
    github: "https://github.com/ElinaHulbert/Swedish-radio-API",
    demo: "https://elinahulbert.github.io/Swedish-radio-API/",
    description: "A Vanilla JS App based on Swedish Radio API.",
  },
  {
    id: 13,
    image: img13,
    title: "MERN Experience",
    github: "https://github.com/ElinaHulbert/ecommerce-team-project",
    demo: "https://benciantar-happening.netlify.app/",
    description:
      "A MERN project made in a team, deployed as a Monorepo on Heroku and Netlify.",
  },
  {
    id: 14,
    image: img14,
    title: "Swedish Radio API with React",
    github: "https://github.com/ElinaHulbert/first_web_app",
    demo: "https://sparkling-douhua-342792.netlify.app/",
    description: "A React App based on Swedish Radio API.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description, link }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <p className="description">{description}</p>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                )}

                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                )}

                {link && (
                  <a href={link} className="btn btn-primary" target="_blank">
                    Link
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
