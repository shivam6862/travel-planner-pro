"use client";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import styles from "../../styles/ChatBot.module.css";
import { use, useState } from "react";
import ChatContainer from "./ChatContainer";
const ChatBot = () => {
  const [toggleChat, setToggleChat] = useState(false);
  const [chat, setChat] = useState([
    {
      message: "Hello!",
      isUser: "false",
    },
  ]);

  const botIconClassName = `${styles["bot-icon"]} ${
    toggleChat ? styles.hide : styles.show
  }`;

  return (
    <>
      <div
        className={botIconClassName}
        onClick={() => {
          setToggleChat(true);
        }}
      >
        <Avatar sx={{ bgcolor: "blue", width: 50, height: 50 }}>
          <MessageRoundedIcon sx={{ width: 30, height: 30 }} />
        </Avatar>
      </div>
      <ChatContainer
        setChat={setChat}
        setToggleChat={setToggleChat}
        chat={chat}
        toggleChat={toggleChat}
      />
    </>
  );
};

export default ChatBot;
