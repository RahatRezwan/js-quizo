import React from "react";
import { Container } from "react-bootstrap";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const QuestionChart = ({ dataArr }) => {
  const data = dataArr;
  return (
    <Container fluid className="d-flex justify-content-center text-center py-5 mx-auto">
      <div style={{ width: "100%", height: 400 }}>
        <h4 className="text-center mb-4">Quiz Question Data</h4>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default QuestionChart;
