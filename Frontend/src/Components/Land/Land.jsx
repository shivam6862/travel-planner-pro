import React from "react";
import { Button, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const Land = () => {
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        mt: 2,
        height: "90vh",
        // backgroundRepeat:'no-repeat'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily:
              "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: { xs: "1.5rem", md: "3rem" },
            fontWeight: 900,
          }}
        >
          Explore A New World.
        </Typography>
        <Typography
          sx={{
            fontFamily:
              "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: { xs: "0.8rem", md: "1rem" },
            color: "gray",
          }}
        >
          No matter where in the world yoyu wnat to go, we can help you get
          there
        </Typography>
        <Button
          sx={{
            background: "wheat",
            color: "black",
            fontWeight: 700,
            fontFamily:
              "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            width: "100px",
            mt: 3,
          }}
        >
          Explore Now
        </Button>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
        }}
      >
        <img
          src="/home.png"
          style={{
            // height:{xs:'300px',md:'500px'},
            // width:{xs:'400px',md:'600px'},
            height: matches ? "500px" : "300px",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Land;
