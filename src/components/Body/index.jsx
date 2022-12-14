import Availability from "../Availability";
import Experience from "../Experience";
import Portfolio from "../Portfolio";
import PreferredEnvironment from "../Preferred Environment";
import SampleCode from "../SampleCode";
import "./style.css";

const Body = () => {
  return (
    <div className="body">
      <Portfolio />
      <Experience />
      <SampleCode />
      <div>
        <Availability />
        <PreferredEnvironment />
      </div>
    </div>
  );
};
export default Body;
