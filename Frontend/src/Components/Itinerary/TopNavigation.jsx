import React from "react";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RoomIcon from "@mui/icons-material/Room";
import classes from "../../styles/Itinerary.module.css";

const TopNavigation = ({ values, handleChange }) => {
  return (
    <div className={classes.containerTopNavigation}>
      <Box>
        <TextField
          label="From ?"
          type={"text"}
          value={values.from?.name}
          onChange={handleChange("from")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon
                  sx={{
                    color: "green",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <TextField
          label="Destination ?"
          type={"text"}
          value={values.to?.name}
          onChange={handleChange("to")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PinDropIcon
                  sx={{
                    color: "red",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <TextField
          label="From Date?"
          type={"text"}
          value={values.dateFrom}
          onChange={handleChange("dateFrom")}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </Box>
      <Box>
        <TextField
          label="To Date ?"
          type={"text"}
          value={values.dateTo}
          onChange={handleChange("dateTo")}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </Box>
      <Box>
        <TextField
          label="people ?"
          type={"text"}
          value={values.people}
          onChange={handleChange("people")}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </Box>
    </div>
  );
};

export default TopNavigation;
