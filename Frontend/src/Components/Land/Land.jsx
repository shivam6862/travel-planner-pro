import { Button } from "@mui/material";
import React from "react";

const Land = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "92vh",
        background: 'url("/travel.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "multiply",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "0%",
          transform: "translate(0%, -50%)",
          padding: "3rem",
          paddingRight: "4rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 900 }}>
          Explore A New World.
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "black",
            fontWeight: 700,
            marginTop: "1rem",
            color: "gray",
          }}
        >
          No matter where in the world yoyu wnat to go, we can help you get
          there
        </p>
        <Button
          sx={{
            background: "#c29d59",
            color: "black",
            fontWeight: 700,
            mt: 3,
            padding: "1rem",
          }}
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default Land;
