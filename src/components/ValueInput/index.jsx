import { useEffect, useState } from "react";
import "./style.css";

const ValueInput = ({
  value,
  children,
  onSave,
  className = "",
  onlyNumbers,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleChange = (e) => {
    if (onlyNumbers) {
      setInputValue(e.target.value.replace(/[^0-9\.]/g, ""));
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleBlur = () => {
    setShowInput(false);
    onSave(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <>
      {!showInput && <div onClick={handleClick}>{children}</div>}
      {showInput && (
        <span className="inputWrapper">
          <input
            className={className}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="inputIconWrapper"></div>
        </span>
      )}
    </>
  );
};
export default ValueInput;
