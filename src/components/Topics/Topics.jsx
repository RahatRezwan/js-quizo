import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const data = useLoaderData();
  const topics = data.data;
  return (
    <Container>
      <Row className="text-center my-5">
        <h2 className="fw-bolder">Quiz Topics</h2>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {topics.map((topic) => (
          <Col>
            <Topic key={topic.id} topic={topic} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Topics;
