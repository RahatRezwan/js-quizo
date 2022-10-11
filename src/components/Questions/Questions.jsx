import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Questions.css";
const Questions = () => {
  const questions = useLoaderData();
  console.log(questions);
  return <div>Questions</div>;
};

export default Questions;
