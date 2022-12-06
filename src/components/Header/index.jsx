import React, { useContext } from "react";
import Language from "../../assets/Language.png";
import Vector from "../../assets/Vector.svg";
import { MainContext } from "../../pages/Main";
import PrintIcon from "../Icons/PrintIcon";
import SkillList from "../SkillList";
import ValueInput from "../ValueInput";
import Avatar from "./../../assets/Avatar.png";
import "./styles.css";

const Header = () => {
  const printPdf = () => {
    console.log("print");
  };
  const [data, setData] = useContext(MainContext);

  const handleSaveName = (newName) => {
    setData({
      ...data,
      name: newName,
    });
  };

  const handleSaveLocation = (newLocation) => {
    setData({
      ...data,
      location: newLocation,
    });
  };

  return (
    <>
      <div className="header__background" />
      <div className="header">
        <div className="header__avatar">
          <img src={Avatar} />
        </div>
        <div className="header__info">
          <div className="header__info-name-wrapper">
            <ValueInput
              value={data.name}
              onSave={handleSaveName}
              className="header__info-name"
            >
              <h1 className="header__info-name">{data.name}</h1>
            </ValueInput>
          </div>

          <ValueInput
            value={data.location}
            className="header__info-location"
            onSave={handleSaveLocation}
          >
            <p className="header__info-location">{data.location}</p>
          </ValueInput>
          <div className="header__info-language-wrapper">
            <img className="header__info-language-flag" src={Language} alt="" />
            <span>English</span>
          </div>
          <SkillList />
        </div>
        <div className="header__print" onClick={printPdf}>
          <div className="header__print-icon">
            <PrintIcon />
          </div>
          <span className="link">Print this page</span>
        </div>
      </div>
    </>
  );
};
export default Header;
