import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

const container_style = {
  display: "block",
  margin: "auto",
  marginTop: "100px",
  marginLeft: "800px",
  flex: "right",
  height: "200px",
  width: "300px",
  backgroundColor: "black",
  boxShadow: "0px 0px 13px 0px",
  borderRadius: "30px",
};

const header_style = {
  marginTop: "40px",
  marginBottom: "40px",
  color: "white",
};

const Roller = () => {
  return (
    <div style={container_style}>
      <h2 style={header_style}>Live Dice</h2>
      <ReactDice
        faceColor="white"
        dotColor="black"
        numDice={1}
        rollTime={2}
        dieSize={80}
        outline={1}
        outlineColor="gold"
      />
    </div>
  );
};

export default Roller;
