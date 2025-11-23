import React from "react";
import "./button.css";

const Button = ({ text, onClick, blue }) => {
  return (
    <div className={blue ? "btn-blue" : "btn"} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
