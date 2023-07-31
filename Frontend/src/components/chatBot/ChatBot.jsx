import React, { useState } from "react";
import useBot from "../../Hook/useBot";
import classes from "../../styles/ChatBot.module.css";
import Chat from "./Chat";
import SendIcon from "@mui/icons-material/Send";
import SvgCross from "../../../public/SvgCross";

const ChatBot = ({ setToggleChat, chat, setChat }) => {
  const { check, answer } = useBot();
  const [question, setQuestion] = useState("");
  const callBot = async () => {
    if (question.trim().length == 0) return;
    setChat((prev) => [...prev, { message: question, isUser: "true" }]);
    const response = await answer(question);
    setQuestion("");
    if (response?.length > 0) {
      setChat((prev) => [
        ...prev,
        { message: response[0].text, isUser: "false" },
      ]);
    }
  };
  return (
    <div className={classes.container}>
      <div
        className={classes.cross}
        onClick={() => {
          setToggleChat(false);
        }}
      >
        <SvgCross />
      </div>
      <div className={classes.chatBotChat}>
        <Chat chat={chat} />
      </div>
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
      <div onClick={() => callBot()} className={classes.sending}>
        <SendIcon />
      </div>
    </div>
  );
};

export default ChatBot;
