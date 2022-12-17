import React from "react";
import "./style.css";

const Laout = ({ children }) => {
  return (
    <div className="container">
      <div className="grid layout">{children}</div>
    </div>
  );
};

export default Laout;
