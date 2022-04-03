import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/elina-hulbert/" target="_blank">
        <BsLinkedin size={42} />
      </a>
      <a href="https://github.com/ElinaHulbert" target="_blank">
        <FaGithubSquare size={48} />
      </a>
      <a href="https://www.behance.net/elinahulbert" target="_blank">
        <ImBehance2 size={42} />
      </a>
    </div>
  );
};

export default HeaderSocials;
