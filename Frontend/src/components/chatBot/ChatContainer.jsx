"use client";
import React, { useState } from "react";
import useBot from "../../Hook/useBot";
import classes from "../../styles/ChatBot.module.css";
import Chat from "./Chat";
import SendIcon from "@mui/icons-material/Send";
import SvgCross from "../../../public/SvgCross";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

const ChatContainer = ({ setToggleChat, chat, setChat, toggleChat }) => {
  const { check, answer } = useBot();
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const callBot = async () => {
    if (question.trim().length == 0) return;
    setChat((prev) => [...prev, { message: question, isUser: "true" }]);
    setIsLoading(true);
    const response = await answer(question);
    setQuestion("");
    if (response?.length > 0) {
      setChat((prev) => [
        ...prev,
        { message: response[0].text, isUser: "false" },
      ]);
    }
    setIsLoading(false);
  };
  const chatContainerClassName = `${classes.container} ${
    toggleChat ? classes.show : classes.hide
  }`;
  return (
    <div className={chatContainerClassName}>
      <div
        className={classes.header}
        onClick={() => {
          setToggleChat(false);
        }}
      >
        <Avatar sx={{ bgcolor: "blue", width: 50, height: 50 }}>
          <MessageRoundedIcon sx={{ width: 30, height: 30 }} />
        </Avatar>
        <div className={classes.title}>
          <h3>TravelBot</h3>
          <p>Online</p>
        </div>
        <div className={classes.cross}>
          <SvgCross />
        </div>
      </div>
      <div className={classes.chatBotChat}>
        <Chat chat={chat} />
      </div>
      <div className={classes["input-container"]}>
        <input
          type="text"
          name="chat"
          id="chat"
          placeholder="Ask something"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        {isLoading ? (
          <div className={classes.spinner}></div>
        ) : (
          <div onClick={() => callBot()} className={classes.sending}>
            <SendIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
