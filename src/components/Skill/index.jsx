import React from "react";
import DeleteSkillIcon from "../Icons/DeleteSkillIcon";
import "./style.css";

const Skill = ({ skillName, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(skillName);
  };
  return (
    <div className="skill">
      {skillName}
      <div className="skillDeleteWrapper" onClick={handleDeleteClick}>
        <DeleteSkillIcon />
      </div>
    </div>
  );
};

export default Skill;
