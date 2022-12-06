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
    console.log("Добавлен");
  };

  return (
    <div className="skillList">
      {data.skills.map((skill) => (
        <Skill skill={skill.name} key={skill.name} />
      ))}
      <ValueInput onSave={handleAddSkill}>
        <button className="skillList__add">
          <img className="skillList__add-img" src={PlusIcon} alt="" />
        </button>
      </ValueInput>
    </div>
  );
};
export default SkillList;
