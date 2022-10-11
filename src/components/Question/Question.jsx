import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ que, setWrongCount, setRightCount, notify }) => {
  const [disable, setDisable] = useState(false);

  const { options, question, correctAnswer, id } = que;
  const ques = question.slice((1, 3), (-1, -4));

  const handleDisable = (id) => {
    id === que.id ? setDisable(true) : setDisable(false);
  };

  return (
    <Container className="text-start p-3 mb-5 rounded rounded-3 question">
      <h3>{ques}</h3>
      <Row xs={1}>
        {options.map((option, index) => (
          <div className={disable && "disable"}>
            <Option
              key={index}
              option={option}
              correctAnswer={correctAnswer}
              setWrongCount={setWrongCount}
              setRightCount={setRightCount}
              notify={notify}
              id={id}
              handleDisable={handleDisable}
            />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Question;
