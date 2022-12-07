import Comments from "../Comments";
import Map from "../Map";
import "./style.css";

const Footer = () => {
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
      <Map />
    </div>
  );
};
export default Footer;
