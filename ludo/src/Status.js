import React from "react";

const container_style = {
  display: "block",
  margin: "auto",
  marginTop: "-200px",
  marginLeft: "1120px",
  flex: "right",
  height: "200px",
  width: "300px",
  backgroundColor: "black",
  boxShadow: "0px 0px 13px 0px",
  borderRadius: "30px",
};

const header_style = {
  margin: "0px",
  color: "white",
};

const list_style = {
  //   margin: "0px",
  fontSize: "20px",
  color: "white",
};

const Status = () => {
  return (
    <div style={container_style}>
      <h2 style={header_style}>Game Status:</h2>
      <ul>
        <li style={list_style}>Active Player: Red</li>
      </ul>
    </div>
  );
};

export default Status;
