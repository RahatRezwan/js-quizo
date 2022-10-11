import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
  const data = useLoaderData();
  const questionsData = data.data;
  const allQuestions = questionsData.questions;

  return (
    <Container>
      <Row className="text-center my-5">
        <h1>{questionsData.name} Quiz</h1>
      </Row>
      <Row xs={1} xl={2} className="text-center">
        {allQuestions.map((que) => (
          <Col>
            <Question key={que.id} que={que} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Questions;
