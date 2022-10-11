import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ que, setWrongCount, setRightCount, notify }) => {
  const [disable, setDisable] = useState(false);

  const { options, question, correctAnswer, id } = que;
  const ques = question.slice((1, 3), (-1, -4));

  const handleDisable = (id) => {
    id === que.id ? setDisable(true) : setDisable(false);
  };

  const seeCorrectAnswer = () => {
    disable
      ? notify(`Correct Answer is : "${correctAnswer}"`)
      : notify("Please Select an Option First");
  };

  return (
    <Container className="text-start p-3 mb-5 rounded rounded-3 question">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="">{ques}</h5>
        <FontAwesomeIcon onClick={seeCorrectAnswer} icon={faEye} className="my-0 py-0 see-ans" />
      </div>
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
