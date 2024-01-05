import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Elina Hulbert
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/elina-hulbert/">
          <BsLinkedin size={32} />
        </a>
        <a href="https://github.com/ElinaHulbert">
          <FaGithubSquare size={32} />
        </a>
        <a href="https://www.behance.net/elinahulbert">
          <ImBehance2 size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
