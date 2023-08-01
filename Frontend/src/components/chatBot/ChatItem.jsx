import React from "react";
import classes from "../../styles/ChatBot.module.css";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

const ChatItem = ({ data }) => {
  return (
    <>
      {data.isUser == "true" ? (
        <div className={classes.right}>
          <p>You</p>
          <div className={classes["chat-right"]}>{data.message}</div>
        </div>
      ) : (
        <div className={classes.left}>
          <div className={classes.avatar}>
            <Avatar sx={{ bgcolor: "blue", width: 20, height: 20 }}>
              <MessageRoundedIcon sx={{ width: 13, height: 13 }} />
            </Avatar>
            <p>TravelBot</p>
          </div>
          <div className={classes["chat-left"]}>{data.message}</div>
        </div>
      )}
    </>
  );
};

export default ChatItem;
