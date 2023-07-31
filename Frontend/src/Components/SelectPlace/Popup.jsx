import React from "react";
import Button from "../Button";

const Popup = () => {
  const submit = () => {};
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
          width: "50vw",
          height: "50vh",
          backgroundColor: "var(--white-light-color)",
          boxShadow: "var(--box-shadow:)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000000",
          borderRadius: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            color: "var(--yellow-color)",
            fontWeight: "600",
          }}
        >
          Are you sure to make Itinerary
        </div>
        <div
          style={{
            width: "120px",
          }}
        >
          <Button name="Make it" onClick={submit} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
