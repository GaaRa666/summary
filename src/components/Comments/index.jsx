import "./style.css";

const Quotes = ({ comments }) => {
  return (
    <div className="comments">
      <span className="gigantic-quotes"> “</span>
      <p className="comments">{comments}</p>
      <span className="gigantic-quotes">„</span>
    </div>
  );
};

const Comments = ({ title, comments }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Quotes comments={comments} />
    </div>
  );
};
export default Comments;
