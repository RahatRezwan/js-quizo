import React, { useState } from "react";
import "./Option.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Option = ({
  option,
  correctAnswer,
  setWrongCount,
  setRightCount,
  notify,
  id,
  handleDisable,
}) => {
  const [color, setColor] = useState(0);
  const handleAnswer = (selectedOption) => {
    let message;
    const right = selectedOption === correctAnswer;
    right ? setColor(true) : setColor(false);
    right ? setRightCount((prev) => prev + 1) : setWrongCount((prev) => prev + 1);
    right
      ? (message = "Congratulations! Your Answer is Correct!")
      : (message = "Sorry! You have selected wrong answer");
    notify(message);
    handleDisable(id);
  };

  return (
    <div
      onClick={() => handleAnswer(option)}
      className={`mb-2 d-flex gap-2 p-2 rounded rounded-md align-items-center w-100 justify-content-start option ${
        (color === false && "option-wrong") || (color === true && "option-right")
      }`}
    >
      <div
        className={`p-1 ${
          (color === false && "checkbox-wrong d-block") ||
          (color === true && "checkbox-right d-block")
        }`}
        styles={{ width: "10px", height: "10px" }}
      >
        <FontAwesomeIcon
          icon={(color === false && faXmark) || (color === true && faCheck)}
          className={`text-dark p-0 m-0 text-white`}
        />
      </div>
      <h6 className="m-0">{option}</h6>
    </div>
  );
};

export default Option;
