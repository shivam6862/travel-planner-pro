import React from "react";
import ChatItem from "./ChatItem";
import classes from "../../styles/ChatBot.module.css";

const Chat = ({ chat }) => {
  return (
    <div className={classes.containerChat}>
      {chat.map((item, index) => (
        <ChatItem data={item} key={index} />
      ))}
    </div>
  );
};

export default Chat;
