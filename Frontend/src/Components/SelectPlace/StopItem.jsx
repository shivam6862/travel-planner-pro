// "use client";
import React from "react";
import AllStopButton from "./AllStopButton";
import classes from "../../styles/Stop.module.css";
import styles from "../../styles/SelectPlace.module.css";
import { useState } from "react";
import Image from "next/image";
import marker from "../../../public/marker-icon.png";

// const StopItem = ({
//   id,
//   deleteStop,
//   addStop,
//   newStop,
//   place,
//   setplace,
//   autoComplete,
// }) => {
//   const [showTo, setShowTo] = useState(false);
//   console.log(autoComplete);
//   return (
//     <div className={classes.containerItem}>
//       <div className={classes.input}>
//         <input
//           type="text"
//           value={place}
//           placeholder="Stop"
//           onChange={(e) => {
//             setplace(e.target.value, id);
//           }}
//           onFocus={() => {
//             setShowTo(true);
//           }}
//         />
//         {showTo && autoComplete.length > 0 && (
//           <div className={styles.searchLocations}>
//             {autoComplete.map((place, index) => (
//               <div
//                 key={index}
//                 className={styles.searchLocationBox}
//                 onClick={() => {
//                   setplace(place.display_name, id);

//                   setShowTo(false);
//                 }}
//               >
//                 <Image
//                   className={styles.marker}
//                   src={marker}
//                   width={30}
//                   height={30}
//                 />
//                 <div className={styles.searchLocation}>
//                   {place.display_name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <AllStopButton
//         id={id}
//         deleteStop={deleteStop}
//         addStop={addStop}
//         newStop={newStop}
//       />
//     </div>
import { TextField, Box, InputAdornment } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const StopItem = ({
  id,
  deleteStop,
  addStop,
  newStop,
  place,
  setplace,
  autoComplete,
}) => {
  const [showTo, setShowTo] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection:'column',
          width: "100%",
          mt:1,
        }}
      >
        <TextField
          label="Stop"
          value={place}
          onChange={(e) => {
            setplace(e.target.value, id);
          }}
          onFocus={() => setShowTo(true)}
          sx={{
            background: "white",
            width: "100%",
            borderRadius: "5px",
            color: "green",
            // mr: 3,
            display: "flex",
            justifyContent: "center",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddLocationAltIcon
                  sx={{
                    color: "#17a2b8",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        {showTo && autoComplete.length > 0 && (
          <div className={styles.searchLocations}>
            {autoComplete.map((place, index) => (
              <div
                key={index}
                className={styles.searchLocationBox}
                onClick={() => {
                  setplace(place.display_name, id);

                  setShowTo(false);
                }}
              >
                <Image
                  className={styles.marker}
                  src={marker}
                  width={30}
                  height={30}
                />
                <div className={styles.searchLocation}>
                  {place.display_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </Box>
      <AllStopButton
        id={id}
        deleteStop={deleteStop}
        addStop={addStop}
        newStop={newStop}
      />
    </Box>
  );
};

export default StopItem;
