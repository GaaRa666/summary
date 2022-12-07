import { useEffect, useState } from "react";
import ApproveIcon from "../Icons/ApproveIcon";
import RejectIcon from "../Icons/RejectIcon";
import "./style.css";

const ValueInput = ({
  value,
  children,
  onSave,
  className = "",
  onlyNumbers,
  fromButton,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [inputValid, setInputValid] = useState(true);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleInvalid = () => {
    console.log("Error Description");
  };

  const handleChange = (e) => {
    e.target.value.match(/[^a-zA-Z0-9 ,]+/g)
      ? setInputValid(false)
      : setInputValid(true);
    onlyNumbers
      ? setInputValue(e.target.value.replace(/[^0-9\,]/g, ""))
      : setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setShowInput(false);
    inputValue && onSave(inputValue);
    fromButton && setInputValue("");
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
            onInvalid={handleInvalid}
            required
          />
          <div className="inputIconWrapper">
            {inputValid ? <ApproveIcon /> : <RejectIcon />}
          </div>
        </span>
      )}
    </>
  );
};
export default ValueInput;
