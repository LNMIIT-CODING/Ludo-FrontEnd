import React from "react";

const cell_style = (i, j) => {
  const style = {
    height: "35px",
    width: "35px",
    float: "left",
  };
  const borderSize = 2,
    marginSize = 3;
  if (
    (i <= 8 && i >= 6 && j <= 8 && j >= 6) ||
    ((i <= 5 || i >= 9) && (j <= 5 || j >= 9))
  ) {
    style["margin"] = `${marginSize + borderSize}px`;
  } else {
    style["border"] = `${borderSize}px solid white`;
    style["margin"] = `${marginSize}px`;
  }
  if (i === 7 && j <= 6 && j >= 1) {
    style["margin"] = `${marginSize + borderSize}px`;
    style["border"] = "";
    style["backgroundColor"] = "Red";
  }
  if (i === 7 && j <= 13 && j >= 8) {
    style["margin"] = `${marginSize + borderSize}px`;
    style["border"] = "";
    style["backgroundColor"] = "Green";
  }
  if (j === 7 && i <= 6 && i >= 1) {
    style["margin"] = `${marginSize + borderSize}px`;
    style["border"] = "";
    style["backgroundColor"] = "Blue";
  }
  if (j === 7 && i <= 13 && i >= 8) {
    style["margin"] = `${marginSize + borderSize}px`;
    style["border"] = "";
    style["backgroundColor"] = "Yellow";
  }
  return style;
};

const pawn_style = (color) => {
  return {
    backgroundColor: color,
    borderRadius: "50%",
    width: "inherit",
    height: "inherit",
  };
};

const get_content = (color) => {
  if (color) {
    return <div style={pawn_style(color)}></div>;
  }
  return;
};

const Cell = (props) => {
  return (
    <div style={cell_style(props.i, props.j)}>{get_content(props.color)}</div>
  );
};

export default Cell;
