"use client";
import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ name }) => {
  const submit = () => {
    console.log("Button component created!");
  };
  return (
    <div className={classes.container}>
      <div className={classes.button} onClick={submit}>
        {name}
      </div>
    </div>
  );
};

export default Button;
