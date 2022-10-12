import React from "react";
import { Container } from "react-bootstrap";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const QuestionChart = ({ dataArr }) => {
  const data = dataArr;
  return (
    <Container fluid className="d-flex justify-content-center text-center py-5 mx-auto">
      <div>
        <h4 className="text-center mb-4">Quiz Question Data</h4>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </div>
    </Container>
  );
};

export default QuestionChart;
