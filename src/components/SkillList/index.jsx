import Skill from "../Skill";
import "./style.css";
import PlusIcon from "./../../assets/PlusIcon.svg";

const skills = ["PHP", "Ruby", "JavaScript"];

const SkillList = () => {
  return (
    <div className="skillList">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill} />
      ))}
      <button className="skillList__add">
        <img className="skillList__add-img" src={PlusIcon} alt="" />
      </button>
    </div>
  );
};
export default SkillList;
