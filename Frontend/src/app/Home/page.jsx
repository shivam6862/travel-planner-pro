"use client";
import { Box, Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import React from "react";
import Stack from "@mui/material/Stack";

import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from "@mui/icons-material/Add";
const home = () => {
  return (
    <Box sx={{ transition: "all ease 0.5s" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",

          background: 'url("/travel.png") ',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40rem",
          mixBlendMode: "multiply",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mr: 4,
            mt: -2,
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              fontSize: "3rem",
              fontWeight: 900,
            }}
          >
            Explore A New World.
          </Typography>
          <Typography
            sx={{
              fontFamily:
                "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              fontSize: "1rem",
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
        {/* <Box>
            <img src='/travel.png' height={500} width={700}/>
          </Box> */}
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItemsL: "center",
          mt: 10,
        }}
      >
        <Typography
          sx={{
            ml: { xs: 3, md: 10 },
            fontSize: "2.25rem",
            fontWeight: "700",
            fontFamily:
              "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            color: "#212529",
          }}
        >
          Recently viewed and upcoming
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: "orange",
            width: "fit-content",
            mr: { xs: 0, md: 10 },
            ml: { xs: 3 },
            "&:hover": {
              backgroundColor: "purple",
            },
          }}
          onClick={() => {
            console.log("hello");
          }}
        >
          Plan new trip
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "40%",
          width: "100%",
          background: "wheat",
          mt: 3,
          justifyContent: "center",
          padding: "1rem ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 4,
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#212529",
              fontFamily:
                "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            Hotels ranked by price and rating preferences
          </Typography>
          <Typography
            sx={{
              color: "#212529",
              textAlign: "left",
              fontFamily: "Source Sans Pro",
              width: "67%",
              lineHeight: "18px",
              mt: 1,
            }}
          >
            Experience a better hotel search. We rank hotels based on your price
            and rating preferences, not by how much they pay us. We also show
            you the total cost upfront, among other benefits.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/bedroom.jpg"
            height={180}
            width={400}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Box>
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
              // height: matches ? "500px" : "300px",
              width: "100%",
              transition: "all ease 0.5s",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default home;

// import React from "react";
// import { Button, Typography, Box } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// const Land = () => {
//   const matches = useMediaQuery("(min-width:700px)");

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: "center",
//         mt: 2,
//         height: "90vh",
//         // backgroundRepeat:'no-repeat'
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography
//           sx={{
//             fontFamily:
//               "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
//             fontSize: { xs: "1.5rem", md: "3rem" },
//             fontWeight: 900,
//           }}
//         >
//           Explore A New World.
//         </Typography>
//         <Typography
//           sx={{
//             fontFamily:
//               "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
//             fontSize: { xs: "0.8rem", md: "1rem" },
//             color: "gray",
//           }}
//         >
//           No matter where in the world yoyu wnat to go, we can help you get
//           there
//         </Typography>
//         <Button
//           sx={{
//             background: "wheat",
//             color: "black",
//             fontWeight: 700,
//             fontFamily:
//               "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
//             width: "100px",
//             mt: 3,
//           }}
//         >
//           Explore Now
//         </Button>
//       </Box>
//       <Box
//         sx={{
//           display: { xs: "flex", md: "flex" },
//         }}
//       >
//         <img
//           src="/home.png"
//           style={{
//             // height:{xs:'300px',md:'500px'},
//             // width:{xs:'400px',md:'600px'},
//             height: matches ? "500px" : "300px",
//             width: "100%",
//             transition:'all ease 0.5s'
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Land;
