import React from "react";

const Message = (props) => {
  const msg_style = {
    width: "200px",
    height: "fit-content",
    display: "block",
    margin: "5px",
    float: props.align,
    clear: props.align,
    color: "white",
    border: "2px solid white",
    borderRadius: "13px",
    padding: "3px",
    wordWrap: "break-word",
  };
  return <div style={msg_style}>{props.text}</div>;
};

export default Message;
