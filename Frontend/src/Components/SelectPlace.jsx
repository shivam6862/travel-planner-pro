"use client";
import React, { useState } from "react";

import classes from "../styles/SelectPlace.module.css";
import useAutoComplete from "../Hook/useAutoComplete";
import marker from "../../public/marker-icon.png";
import Image from "next/image";
import useLocation from "../Hook/useLocation";
import useReverseGeocoding from "../Hook/useReverseGeocoding";
import Stop from "./SelectPlace/Stop";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, TextField, Button, IconButton } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RoomIcon from "@mui/icons-material/Room";
import PinDropIcon from '@mui/icons-material/PinDrop';

const SelectPlace = ({ setSearchTerm }) => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    cultural: "",
  });
  const [showTo, setShowTo] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values.to);
  };
  const { getLocation } = useLocation(setSearchTerm);
  const { error, isLoading, reverseGeocoding } = useReverseGeocoding(setValues);

  console.log(values.place);
  const autoCompleteTo = useAutoComplete(values.to);
  const autoCompleteFrom = useAutoComplete(values.from);
  return (
    <div className={classes.container}>
      <div
        className={classes.input}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          label="From ?"
          value={values.from}
          onChange={handleChange("from")}
          type={"text"}
          onFocus={() => setShowFrom(true)}
          sx={{
            width: "60%",
            background: "white",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon sx={{
                  color:'green'
                }}/>
              </InputAdornment>
            ),
          }}
       
        />
        <Button
          sx={{
            background: "wheat",
            color: "black",
            fontFamily:
              "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontWeight: 900,
            ml: 1,
          }}
          onClick={async () => {
            const location = await getLocation();
            console.log(location);
            if (location) {
              setSearchTerm((prev) => [...prev, [location.lat, location.lon]]);
              await reverseGeocoding(location.lat, location.lon);
            }
          }}
        >
          Locate me &nbsp;
          <GpsFixedIcon
            sx={{
              color: "#17a2b8",
            }}
          />
        </Button>
        {showFrom && autoCompleteFrom.autoComplete.length > 0 && (
          <div className={classes.searchLocations}>
            {autoCompleteFrom.autoComplete.map((place, index) => (
              <div
                key={index}
                className={classes.searchLocationBox}
                onClick={() => {
                  setValues((prev) => ({
                    ...prev,
                    from: place.display_name,
                  }));
                  setSearchTerm((prev) => [...prev, [place.lat, place.lon]]);

                  setShowFrom(false);
                }}
              >
                <Image
                  className={classes.marker}
                  src={marker}
                  width={30}
                  height={30}
                />
                <div className={classes.searchLocation}>
                  {place.display_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.input}>
        <TextField
          label="Destination?"
          type={"text"}
          value={values.to}
          onChange={handleChange("to")}
          onFocus={() => setShowTo(true)}
          sx={{
            background: "white",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PinDropIcon sx={{
                  color:'red'
                }}/>
              </InputAdornment>
            ),
          }}
         
        />

        {showTo && autoCompleteTo.autoComplete.length > 0 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              backgroundColor: "white",
              zIndex: 1000,
              padding: "1rem",
              border: "1px solid black",
            }}
          >
            {autoCompleteTo.autoComplete.map((place, index) => (
              <div
                key={index}
                className={classes.searchLocationBox}
                onClick={() => {
                  setValues((prev) => ({
                    ...prev,
                    to: place.display_name,
                  }));
                  setSearchTerm((prev) => [...prev, [place.lat, place.lon]]);

                  setShowTo(false);
                }}
              >
                <Image
                  className={classes.marker}
                  src={marker}
                  width={30}
                  height={30}
                />
                <div className={classes.searchLocation}>
                  {place.display_name}
                </div>
              </div>
            ))}
          </Box>
        )}
      </div>

      {/* <div className={classes.input}>
        <input
          placeholder="Date ?"
          type={"date"}
          value={values.date}
          onChange={handleChange("date")}
        />
      </div> */}
      <Box>
        {/* <TextField label="Date" /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "Check-in", end: "Check-out" }}
              onChange={handleChange("date")}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box sx={{}}>
        <Stop />
      </Box>

      <div className={classes.buttons}>
        <Button name={"Add Route"} />
      </div>
    </div>
  );
};
export default SelectPlace;
