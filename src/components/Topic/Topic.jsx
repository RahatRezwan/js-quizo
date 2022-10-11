import React from "react";
import { Button } from "react-bootstrap";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="border border-2">
      <img src={logo} alt="logo" className="img-fluid" />
      <h2>{name}</h2>
      <h2>Total Questions: {total}</h2>
      <Button className="btn">Take Quiz</Button>
    </div>
  );
};

export default Topic;
