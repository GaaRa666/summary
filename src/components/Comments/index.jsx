import "./style.css";

const Quotes = ({ children }) => {
  return (
    <div className="commentsText">
      <span className="giganticLeftQuotes">“</span>
      {children}
      <span className="giganticRightQuotes">„</span>
    </div>
  );
};

const Comments = ({ title, comments }) => {
  return (
    <div className="comments">
      <h2 className="commentsTitle">{title}</h2>
      <Quotes>
        <p className="commensQuotes">{comments}</p>
      </Quotes>
    </div>
  );
};
export default Comments;
