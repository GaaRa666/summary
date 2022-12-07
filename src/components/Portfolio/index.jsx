import "./style.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolioSkill">
        <span>-</span>
        <p className="link">Bootstrap 4 Material Design (Sample Link)</p>
      </div>
      <div className="portfolioSkill">
        <span>-</span>
        <p className="link">Modern JavaScript stack</p>
      </div>
      <div className="portfolioSkill">
        <span>-</span>
        <p className="link">Datepicker for twitter bootstrap</p>
      </div>
      <div className="portfolioSkill">
        <span>-</span>
        <p className="link">Fast and reliable Bootstrap widgets in Angular </p>
      </div>
    </div>
  );
};
export default Portfolio;
