import React from "react";
import "./Services.css";
// import { BsCheck } from "react-icons/bs";
import timeline from "../../assets/timeline.svg";

const Services = () => {
  return (
    <section id="services">
      <h5>Storytelling</h5>
      <h2>My Timeline</h2>

      {/* <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck size={42} className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div> */}
      <div className="timeline">
        <img src={timeline} alt="my timeline" />
      </div>
    </section>
  );
};

export default Services;
