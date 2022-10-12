import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Article from "../Article/Article";
import "./Blogs.css";
const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <Container>
      <Row className="text-center pt-5 pb-0">
        <h2>Latest Blogs</h2>
      </Row>
      <Row xs={1} md={2} lg={3} className="py-2 my-5">
        {blogs.map((blog) => (
          <Col>
            <Article key={blog.id} blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
