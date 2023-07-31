"use client";
import React from "react";
import Button from "../Button";
import { useContext } from "react";
import AuthenticationContext from "../../Store/Authentication-context";

const Popup = ({ setShowPopup }) => {
  const authenticationContextCtx = useContext(AuthenticationContext);
  const submit = () => {
    setShowPopup(false);
    authenticationContextCtx.onShow("LogInOpen");
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          opacity: "0.7",
          zIndex: "1000",
          display: "block",
          color: "black",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "var(--white-light-color)",
          boxShadow: "var(--box-shadow:)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000000",
          borderRadius: "2rem",
          padding: "2rem 4rem",
        }}
      >
        <div
          style={{
            fontSize: "1.3rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            color: "var(--yellow-color)",
            fontWeight: "600",
          }}
        >
          Login to add itinerary.
        </div>
        <div
          style={{
            width: "120px",
          }}
        >
          <Button name="Login" onClick={submit} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
