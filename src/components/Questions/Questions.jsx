import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = ({ notify }) => {
  const [wrongCount, setWrongCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const data = useLoaderData();
  const questionsData = data.data;
  const allQuestions = questionsData.questions;

  console.log("wrong: ", wrongCount);
  console.log("right: ", rightCount);

  return (
    <Container>
      <Row className="text-center my-5">
        <h1>{questionsData.name} Quiz</h1>
      </Row>
      <Row lg={2}>
        <Row xs={1} className="text-center container-sm mx-auto flex-grow">
          {allQuestions.map((que) => (
            <Col>
              <Question
                key={que.id}
                que={que}
                setWrongCount={setWrongCount}
                setRightCount={setRightCount}
                notify={notify}
              />
            </Col>
          ))}
        </Row>
        <div className="summary w-25 d-none d-md-block">
          <h5>Result</h5>
          <h6>Correct Answer: {rightCount}</h6>
          <h6>Wrong Answer: {wrongCount}</h6>
        </div>
      </Row>
    </Container>
  );
};

export default Questions;
