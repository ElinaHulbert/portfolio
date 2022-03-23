import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello, I am</h5>
          <h1>Elina Hulbert</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={Me} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header