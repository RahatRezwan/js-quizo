import React from "react";
import "./Option.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Option = ({ option }) => {
  return (
    <div className="border border-1 mb-1 d-flex gap-2 p-2 rounded rounded-md align-items-center w-100 justify-content-start">
      <div className="border border-1 p-1" styles={{ width: "10px", height: "10px" }}>
        <FontAwesomeIcon icon={faCheck} className="text-dark p-0 m-0" />
      </div>
      <h6 className="m-0">{option}</h6>
    </div>
  );
};

export default Option;
