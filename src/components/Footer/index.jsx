import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../pages/Main";
import Comments from "../Comments";
import Maps from "../Maps";
import "./style.css";

const Footer = () => {
  const [data, setData] = useContext(MainContext);
  const [location, setLocation] = useState(data.location);

  useEffect(() => {
    setLocation(data.location);
  }, [data.location]);

  return (
    <div className="footer">
      <Comments
        title="The Most Amaizing..."
        comments="The only true wisdom is in knowing you know nothing..."
      />
      <Comments
        title="In clients I look for..."
        comments="There is only one good, knowledge, and one evil, ignorance."
      />
      <Maps location={location} />
    </div>
  );
};
export default Footer;
