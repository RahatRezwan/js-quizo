import React from "react";
import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container className="container-md text-center my-5 d-flex justify-content-center align-items-center">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          Go To <Link to="/">Home</Link>
        </p>
      </div>
    </Container>
  );
};

export default ErrorPage;
