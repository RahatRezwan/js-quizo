import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
import headerImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <Container fluid className="px-0 position-relative">
      <img src={headerImage} alt="" className="w-100" />
      <div className="header-content">
        <h1 className="text-center fw-bolder">Participate Our Quiz</h1>
        <h4>
          JS Quizo Brings An Awesome Opportunity for You. Take our quiz today and judge your skills.
        </h4>
        <h4>
          We have 4 different topics for quiz. You can check your answer after completing the quiz.
        </h4>
      </div>
    </Container>
  );
};

export default Header;
