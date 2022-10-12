import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Article.css";
const Article = ({ blog }) => {
  // See more state
  const [seeMore, setSeeMore] = useState(false);
  const { img, question, answer } = blog;

  return (
    <div className={`border rounded rounded-xl article ${seeMore && "animation"}`}>
      <img src={img} alt="blog-img" className="img-fluid rounded rounded-xl p-3" />
      <div className="p-3 pt-0">
        <h3 className="fw-bolder fs-4">{question}</h3>
        <div>
          <p className={seeMore || "text-ellipsis"}>{answer}</p>
        </div>
        <Button onClick={() => setSeeMore((prev) => !prev)} variant="outline-primary">
          {seeMore ? "See Less" : "See More"}
        </Button>
      </div>
    </div>
  );
};

export default Article;
