import Skill from "../Skill";
import "./style.css";
import PlusIcon from "./../../assets/PlusIcon.svg";
import { useContext } from "react";
import { MainContext } from "../../pages/Main";
import ValueInput from "../ValueInput";

const SkillList = () => {
  const [data, setData] = useContext(MainContext);

  const handleAddSkill = (skillName) => {
    setData({
      ...data,
      skills: [...data.skills, { name: skillName }],
    });
  };
  const handleDeleteSkill = (skillName) => {
    setData({
      ...data,
      skills: [
        ...data.skills.filter((skill) => {
          return skill.name !== skillName;
        }),
      ],
    });
  };

  return (
    <div className="skillList">
      {data.skills.map((skill) => (
        <Skill
          onDelete={handleDeleteSkill}
          skillName={skill.name}
          key={skill.name}
        />
      ))}
      <ValueInput
        className="skillListWrapper"
        value={""}
        onSave={handleAddSkill}
        fromButton
      >
        <button className="skillListAdd">
          <img className="skillListAddImg" src={PlusIcon} alt="" />
        </button>
      </ValueInput>
    </div>
  );
};
export default SkillList;
