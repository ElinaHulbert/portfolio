import React from "react";
import "./Header.css";
import "./Header.scss";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="art">
            <div className="box">
            <h5 className="greeting">Hi! I'm </h5>
            <div className="title">
              <span className="block"></span>
              <h1>Elina Hulb<span className="e">e</span>rt<span className="dot"></span></h1>
            </div>
            <div className="role">
              <div className="block"></div>
              <p className="role-p">Frontend Developer & Artist <br></br>Based In Stockholm</p>
            </div>
          </div>
        </div>
       
        <CTA />
        <HeaderSocials />
          
        </div>
      </header>
    </>
  );
};

export default Header;
