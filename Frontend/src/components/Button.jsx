"use client";
import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.button} onClick={onClick}>
        {name}
      </div>
    </div>
  );
};

export default Button;
