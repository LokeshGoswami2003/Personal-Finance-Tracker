import React from "react";
import "./input.css";
const Input = ({ label, state, setState, placeHolder }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="custom-input"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
