import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {ImBehance2} from "react-icons/im"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithubSquare/></a>
        <a href="https://behance.com" target="_blank"><ImBehance2/></a>
    </div>
  )
}

export default HeaderSocials