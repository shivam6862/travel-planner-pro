// "use client";
import React from "react";
import AllStopButton from "./AllStopButton";
import classes from "../../styles/Stop.module.css";
// import styles from "../../styles/SelectPlace.module.css";
// import { useState } from "react";
// import Image from "next/image";
// import marker from "../../../public/marker-icon.png";

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
const StopItem = ({ id, deleteStop, addStop, newStop, place, setplace }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        // background:'green',
        width: "20%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <TextField
          label="Stop"
          value={place}
          onChange={(e) => {
            setplace(e.target.value, id);
          }}
          sx={{
            background: "white",
            width: "37rem",
            // border:'1px solid gray',
            borderRadius: "5px",
            color: "green",
            mr: 3,
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
        <AllStopButton
          id={id}
          deleteStop={deleteStop}
          addStop={addStop}
          newStop={newStop}
        />
      </Box>
    </Box>
  );
};

export default StopItem;
