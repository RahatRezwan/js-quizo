import React from "react";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ que }) => {
  const { options, question, correctAnswer } = que;

  const ques = question.slice((1, 3), (-1, -4));

  return (
    <div className="border text-start p-2 mb-4 rounded rounded-3">
      <h3>{ques}</h3>
      {options.map((option, index) => (
        <Option key={index} option={option} />
      ))}
    </div>
  );
};

export default Question;
