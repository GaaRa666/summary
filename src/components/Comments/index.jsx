import "./style.css";

const Quotes = ({ comments }) => {
  return (
    <div className="commentsText">
      <span className="giganticLeftQuotes">“</span>
      <p>{comments}</p>
      <span className="giganticRightQuotes">„</span>
    </div>
  );
};

const Comments = ({ title, comments }) => {
  return (
    <div className="comments">
      <h2 className="commentsTitle">{title}</h2>
      <Quotes comments={comments} />
    </div>
  );
};
export default Comments;
