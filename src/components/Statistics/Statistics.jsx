import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuestionChart from "../QuestionChart/QuestionChart";
import "./Statistics.css";
const Statistics = () => {
  const data = useLoaderData();
  const ques = data.data;
  const [dataArr, setDataArr] = useState([]);

  let newArr;
  useEffect(() => {
    newArr = [];
    for (let que of ques) {
      const newObj = { name: que.name, total: que.total };
      newArr.push(newObj);
    }
    setDataArr(newArr);
  }, [useLoaderData]);

  return (
    <Container>
      <QuestionChart dataArr={dataArr} />
    </Container>
  );
};

export default Statistics;
