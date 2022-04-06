import React from "react";
import "./About.css";
import Me from "../../assets/me-about.jpg";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiReact className="about__icon" />
              {/* <h5>React</h5> */}
            </article>
            <article className="about__card">
              <SiMongodb className="about__icon" />
              {/* <h5>MongoDB</h5> */}
            </article>
            <article className="about__card">
              <SiFirebase className="about__icon" />
              {/* <h5>Firebase</h5> */}
            </article>
            <article className="about__card">
              <SiSass className="about__icon" />
              {/* <h5>SASS/SCSS</h5> */}
            </article>
            <article className="about__card">
              <SiBootstrap className="about__icon" />
              {/* <h5>Bootstrap</h5> */}
            </article>
            <article className="about__card">
              <SiTailwindcss className="about__icon" />
              {/* <h5>Tailwind</h5> */}
            </article>
            <article className="about__card">
              <SiGithub className="about__icon" />
              {/* <h5>Github</h5> */}
            </article>
            <article className="about__card">
              <SiNodedotjs className="about__icon" />
              {/* <h5>Node.js</h5> */}
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil
            autem fugit repellat assumenda amet maxime quisquam molestiae,
            laboriosam quos nesciunt est tempora asperiores aliquam! Laboriosam
            quod quis cupiditate natus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
