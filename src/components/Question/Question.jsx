import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ que, setWrongCount, setRightCount, notify }) => {
  const { options, question, correctAnswer } = que;

  const ques = question.slice((1, 3), (-1, -4));

  return (
    <Container className="text-start p-3 mb-4 rounded rounded-3 question">
      <h3>{ques}</h3>
      <Row xs={1}>
        {options.map((option, index) => (
          <Col>
            <Option
              key={index}
              option={option}
              correctAnswer={correctAnswer}
              setWrongCount={setWrongCount}
              setRightCount={setRightCount}
              notify={notify}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Question;
