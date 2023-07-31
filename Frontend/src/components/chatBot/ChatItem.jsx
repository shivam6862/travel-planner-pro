import React from "react";
import classes from "../../styles/ChatBot.module.css";

const ChatItem = ({ data }) => {
  return (
    <div className={data.isUser == "false" ? classes.left : classes.right}>
      {data.message}
    </div>
  );
};

export default ChatItem;
