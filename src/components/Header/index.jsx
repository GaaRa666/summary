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
      <div className="headerBackground" />
      <div className="header">
        <div className="headerAvatar">
          <img src={Avatar} />
        </div>
        <div className="headerInfo">
          <div className="headerInfoNameWrapper">
            <ValueInput
              value={data.name}
              onSave={handleSaveName}
              className="headerInfoName"
            >
              <h1 className="headerInfoName">{data.name}</h1>
            </ValueInput>
          </div>

          <div className="headerInfoNameWrapper">
            <ValueInput
              value={data.location}
              className="headerInfoLocation"
              onSave={handleSaveLocation}
            >
              <p className="headerInfoLocation">{data.location}</p>
            </ValueInput>
          </div>
          <div className="headerInfoLanguageWrapper">
            <img className="headerInfoLanguageFlag" src={Language} alt="" />
            <span>English</span>
          </div>
          <SkillList />
        </div>
        <div className="headerPrint" onClick={printPdf}>
          <div className="headerPrintIcon">
            <PrintIcon />
          </div>
          <span className="link">Print this page</span>
        </div>
      </div>
    </>
  );
};
export default Header;
