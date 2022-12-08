import Comments from "../Comments";
import Maps from "../Maps";
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
      <Maps />
    </div>
  );
};
export default Footer;
