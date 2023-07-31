"use client";
import React, { useState } from "react";

import classes from "../styles/SelectPlace.module.css";
import useAutoComplete from "../Hook/useAutoComplete";
import marker from "../../public/marker-icon.png";
import Image from "next/image";
import useLocation from "../Hook/useLocation";
import useReverseGeocoding from "../Hook/useReverseGeocoding";
import Stop from "./SelectPlace/Stop";
import { v4 } from "uuid";
import { useLocationLocalStorage } from "../Hook/useLocationLocalStorage";
import { useRouter } from "next/navigation";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, TextField, Button as MButton, IconButton } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RoomIcon from "@mui/icons-material/Room";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Button from "./Button";
import Popup from "./SelectPlace/Popup";

const SelectPlace = ({ setSearchTerm }) => {
  const [values, setValues] = useState({
    from: { name: "", coords: { lat: 0, lon: 0 } },
    to: { name: "", coords: { lat: 0, lon: 0 } },
    dateFrom: "",
    dateTo: "",
  });

  console.log(values.dateFrom, values.dateTo);
  const [arrayStop, setArrayStop] = useState([
    { id: v4(), value: { name: "", coords: { lat: 0, lon: 0 } }, new: true },
  ]);
  const [showTo, setShowTo] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const router = useRouter();
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values.to);
  };
  const { getLocation } = useLocation(setSearchTerm);
  const { error, isLoading, reverseGeocoding } = useReverseGeocoding(setValues);

  const autoCompleteTo = useAutoComplete(values.to);
  const autoCompleteFrom = useAutoComplete(values.from);
  const addRoute = async () => {
    const id = fetchPersonalDetails();
    if (!id) {
      setShowPopup(true);
      return;
    }
    if (!values.from || !values.to || !values.dateFrom || !values.dateTo)
      return;
    try {
      const stops = arrayStop.map((stop) =>
        stop.value.name.length > 0 ? stop.value : null
      );
      const itinerary = { ...values, stops: stops };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/add-itinerary/${id.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itinerary),
        }
      );
      const result = await response.json();

      if (response.ok) router.push(`/itinerary/${result.response}`);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        justifyContent: "center",
        padding: "2rem",
        borderRadius: "4rem",
        borderRight: "10px solid wheat",
        borderLeft: "10px solid wheat",
        position: "relative",
        paddingBottom: "6rem",
        // background:'#c8cccf',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          justifyContent: "space-evenly",
          gap: "1rem",
          // background: "red",
        }}
      >
        <Box
          // className={classes.input}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", md: "50%" },
            // gap:'3rem',
            // background: "green",
          }}
        >
          <TextField
            label="From ?"
            value={values.from.name}
            onChange={handleChange("from")}
            type={"text"}
            onFocus={() => setShowFrom(true)}
            sx={{
              width: "100%",
              // mr: { md: 1 },
              background: "white",
            }}
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
              endAdornment: (
                <InputAdornment position="end">
                  <MButton
                    sx={{
                      background: "wheat",
                      color: "black",
                      fontFamily:
                        "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      fontWeight: 900,
                      width: "fit-content",
                      ml: 1,
                    }}
                    onClick={async () => {
                      const location = await getLocation();
                      console.log(location);
                      if (location) {
                        setSearchTerm((prev) => [
                          ...prev,
                          [location.lat, location.lon],
                        ]);
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
                  </MButton>
                </InputAdornment>
              ),
            }}
          />

          {/* {showFrom && autoCompleteFrom.autoComplete.length > 0 && (
            <div className={classes.searchLocations} >
              {autoCompleteFrom.autoComplete.map((place, index) => (
                <div
                  key={index}
                  className={classes.searchLocationBox}
                  onClick={() => {
                    setValues((prev) => ({
                      ...prev,
                      from: {
                        name: place.display_name,
                        coords: { lat: place.lat, lon: place.lon },
                      },
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
          )} */}
          {showFrom && autoCompleteFrom.autoComplete.length > 0 && (
            <Box
              sx={{
                // width: "42.8%",
                width: { xs: "92%", md: "42.8%" },
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                backgroundColor: "white",
                zIndex: 1000,
                padding: "1rem",
                mt: 6.2,
                border: "1px solid black",
              }}
            >
              {autoCompleteFrom.autoComplete.map((place, index) => (
                <div
                  key={index}
                  className={classes.searchLocationBox}
                  onClick={() => {
                    setValues((prev) => ({
                      ...prev,
                      from: {
                        name: place.display_name,
                        coords: { lat: place.lat, lon: place.lon },
                      },
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
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <TextField
            label="Destination?"
            type={"text"}
            value={values.to.name}
            onChange={handleChange("to")}
            onFocus={() => setShowTo(true)}
            sx={{
              width: "95%",
              background: "white",
            }}
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

          {showTo && autoCompleteTo.autoComplete.length > 0 && (
            <Box
              sx={{
                // width: "48.8%",
                width: { xs: "87%", md: "48.8%" },
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
                      to: {
                        name: place.display_name,
                        coords: { lat: place.lat, lon: place.lon },
                      },
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
        </Box>
      </Box>

      {/* <div className={classes.input}>
        <input
          placeholder="Date ?"
          type={"date"}
          value={values.date}
          onChange={handleChange("dateFrom")}
        />
      </div>
      <div className={classes.input}>
        <input
          placeholder="Date ?"
          type={"date"}
          value={values.date}
          onChange={handleChange("dateTo")}
        />
      </div>
      <div className={classes.stops}>
        <Stop arrayStop={arrayStop} setArrayStop={setArrayStop} />
      </div>
      </div> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          // justifyContent:'space-evenly'
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems:'left',
            justifyContent: "left",
            width: { xs: "100%", md: "46%" },
          }}
        >
          {/* <TextField label="Date" /> */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <DateRangePicker
                localeText={{ start: "Check-in", end: "Check-out" }}
                onChange={(e) => {
                  console.log(e);
                  handleChange("dateFrom")({
                    target: {
                      value: new Date(e[0]["$d"]).toLocaleDateString("en-US"),
                    },
                  });

                  if (e[1] != null)
                    handleChange("dateTo")({
                      target: {
                        value: new Date(e[1]["$d"]).toLocaleDateString("en-US"),
                      },
                    });
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                  width: "100%",
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */}
        </Box>
        <Box
          sx={{
            mt: { xs: 2, md: 1 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Stop arrayStop={arrayStop} setArrayStop={setArrayStop} />
        </Box>
      </Box>

      <div className={classes.buttons}>
        <Button name={"Add Route"} onClick={addRoute} />
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </Box>
  );
};
export default SelectPlace;
