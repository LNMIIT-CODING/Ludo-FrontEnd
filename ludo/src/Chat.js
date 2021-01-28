import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Message from "./Message";

const container_style = {
  display: "block",
  margin: "auto",
  marginTop: "25px",
  marginLeft: "800px",
  flex: "right",
  height: "400px",
  width: "620px",
  backgroundColor: "black",
  boxShadow: "0px 0px 13px 0px",
  borderRadius: "30px",
};

const header_style = {
  margin: "0px",
  color: "white",
};

const chat_box = {
  display: "flex",
  flexDirection: "column-reverse",
  margin: "auto",
  height: "330px",
  width: "550px",
  overflowY: "auto",
};

const input_style = {
  width: "450px",
  margin: "7px",
};

const Chat = () => {
  const [history, setHistory] = useState([]);

  const { register, handleSubmit, setValue } = useForm([]);
  const onSubmit = (data) => {
    create_msg(data.msg, "right");
    setValue("msg", "", false);
  };

  const create_msg = useCallback((msg, align) => {
    setHistory((old_history) => {
      const new_msg = <Message text={msg} align={align} />;
      return [...old_history, new_msg];
    });
  }, []);

  return (
    <div style={container_style}>
      <h2 style={header_style}>Game Chat</h2>
      <div style={chat_box}>
        <div>{history}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Message"
          name="msg"
          ref={register({ required: true })}
          style={input_style}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Chat;
