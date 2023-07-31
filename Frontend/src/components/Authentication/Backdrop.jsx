import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          opacity: "0.7",
          zIndex: "10000",
          display: "block",
          color: "black",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
};

export default Backdrop;
