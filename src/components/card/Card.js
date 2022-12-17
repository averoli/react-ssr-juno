import React from "react";
import Button from "../button/Button";
import "./style.css";

const Card = ({ title, cardElements }) => {
  const styleBg =
    title === "99"
      ? { backgroundColor: "white" }
      : { backgroundColor: "#1d263b" };
  return (
    <article style={styleBg}>
      <h1 className="title">{title}</h1>
      <ul>
        {cardElements.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
      <Button>BLI MEDLEM</Button>
    </article>
  );
};

export default Card;
