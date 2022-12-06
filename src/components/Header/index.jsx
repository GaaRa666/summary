import React from "react";
import Language from "../../assets/Language.png";
import Vector from "../../assets/Vector.svg";
import SkillList from "../SkillList";
import Avatar from "./../../assets/Avatar.png";
import "./styles.css";

const Header = () => {
  const printPdf = () => {
    console.log("print");
  };

  return (
    <>
      <div className="header__background" />
      <div className="header">
        <div className="header__avatar">
          <img src={Avatar} />
        </div>
        <div className="header__info">
          <h1 className="header__info-name">Jonh Smith </h1>
          <p className="header__info-location">Portland, Oregon, USA</p>
          <div className="header__info-language-wrapper">
            <img className="header__info-language-flag" src={Language} alt="" />
            <span>English</span>
          </div>
          <SkillList />
        </div>
        <div className="header__print" onClick={printPdf}>
          <img className="header__print-icon link" src={Vector} alt="" />
          <span className="link">Print this page</span>
        </div>
      </div>
    </>
  );
};
export default Header;
