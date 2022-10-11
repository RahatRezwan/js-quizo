import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;

  /* Navigate to the quiz page */
  const quizQuestions = useNavigate();
  const handleTakeQuiz = () => {
    quizQuestions(`/${name.toLowerCase()}-quiz/${id}`);
  };

  return (
    <div className="border border-2 text-dark rounded mb-4">
      <div className="w-100 p-4 rounded-md">
        <img src={logo} alt="logo" className="img-fluid bg-dark p-2" />
      </div>
      <div className="w-100 p-4 pt-0 rounded-md">
        <h2>{name} Quiz</h2>
        <h4>Total Questions: {total}</h4>
        <Button onClick={handleTakeQuiz} className="btn btn-warning">
          Take Quiz
        </Button>
      </div>
    </div>
  );
};

export default Topic;
