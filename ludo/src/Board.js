import React from "react";
import Cell from "./Cell";

const grid_style = {
  display: "table",
  margin: "auto",
  marginTop: "50px",
  marginLeft: "50px",
  float: "left",
  backgroundColor: "black",
  padding: "3px",
  boxShadow: "0px 0px 13px 0px",
  borderRadius: "30px",
};

const row_style = {
  display: "table",
  margin: "auto",
  clear: "both",
};

const setGrid = (pawn_positions) => {
  const grid = [];

  for (var i = 0; i < 15; i++) {
    const row = [];
    for (var j = 0; j < 15; j++) {
      row.push(<Cell color={pawn_positions[i][j]} i={i} j={j} />);
    }
    grid.push(<div style={row_style}>{row}</div>);
  }
  return grid;
};

const Board = () => {
  const pawn_positions = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "red", "", "red", "", "", "", "", "", "", "", "blue", "", "blue", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "red", "", "red", "", "", "", "", "", "", "", "blue", "", "blue", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "",
      "yellow",
      "",
      "yellow",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "green",
      "",
      "green",
      "",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "",
      "yellow",
      "",
      "yellow",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "green",
      "",
      "green",
      "",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ];
  return <div style={grid_style}>{setGrid(pawn_positions)}</div>;
};

export default Board;
