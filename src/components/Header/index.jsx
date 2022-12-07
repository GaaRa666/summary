import React, { useContext, useRef, useState } from "react";
import Language from "../../assets/Language.png";
import { MainContext } from "../../pages/Main";
import PrintIcon from "../Icons/PrintIcon";
import SkillList from "../SkillList";
import ValueInput from "../ValueInput";
import jsPDF from "jspdf";
import Avatar from "./../../assets/Avatar.png";
import "./styles.css";
import Refresh from "../Icons/Refresh";

const Header = ({ reportTemplateRef }) => {
  const [userAvatar, setUserAvatar] = useState(Avatar);
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

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const handleChooseAvatar = (e) => {
    console.log("e.target.files[0]", e.target.files[0]);
    setUserAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="headerBackground" />
      <div className="header">
        <div className="headerAvatar">
          <img className="headerAvatarImage" src={userAvatar}></img>
          <label className="headerAvatarRefresh">
            <Refresh />
            <input
              type="file"
              className="headerAvatarInput"
              onChange={handleChooseAvatar}
            />
          </label>
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

          <div className="headerInfoLocationWrapper">
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
        <div className="headerPrint" onClick={handleGeneratePdf}>
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
