import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const data = useLoaderData();
  const topics = data.data;
  console.log(topics);
  return (
    <div className="px-0">
      <Header />
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
    </div>
  );
};

export default Home;
