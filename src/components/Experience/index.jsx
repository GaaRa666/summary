import { useContext } from "react";
import { MainContext } from "../../pages/Main";
import ValueInput from "../ValueInput";
import "./style.css";

const Experience = () => {
  const [data, setData] = useContext(MainContext);
  const handleSaveYears = (name, years) => {
    setData({
      ...data,
      skills: [
        ...data.skills
          .map((skill) => {
            if (skill.name === name) {
              return { ...skill, years: years };
            }

            return skill;
          })
          .sort((a, b) => {
            return b.years - a.years;
          }),
      ],
    });
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ul>
        {data.skills.map(({ name, years }) => (
          <li>
            {console.log(name)}
            <span>-{name} </span>
            <ValueInput
              onlyNumbers
              onSave={(years) => handleSaveYears(name, years)}
            >
              <span>{years || 0} years</span>
            </ValueInput>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Experience;
