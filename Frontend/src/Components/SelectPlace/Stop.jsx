import React from "react";
import StopItem from "./StopItem";
import classes from "../../styles/Stop.module.css";
import { v4 } from "uuid";
import useAutoComplete from "../../Hook/useAutoComplete";
import { Box } from "@mui/material";

const Stop = ({ arrayStop, setArrayStop }) => {
  console.log(arrayStop);
  const deleteStop = (id) => {
    const updatedStops = arrayStop.filter((item) => item.id !== id);
    setArrayStop(updatedStops);
  };

  const addStop = (id) => {
    const newStopItem = { id: v4(), value: "", new: true };
    setArrayStop([...arrayStop, newStopItem]);
    setArrayStop((prevArray) =>
      prevArray.map((item) => ({
        ...item,
        new: item.id === id ? false : item.new,
      }))
    );
  };

  const setplace = (value, id) => {
    const itemIndex = arrayStop.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedStops = arrayStop.map((item, index) =>
        index === itemIndex ? { ...item, value } : item
      );
      setArrayStop(updatedStops);
      setArrayStop((prevArray) =>
        prevArray.map((item) => ({
          ...item,
          new: item.id === id ? true : item.new,
        }))
      );
    }
  };

  const { autoComplete } = useAutoComplete(
    arrayStop[arrayStop.length - 1].value
  );

  return (
    // <div className={classes.container}>
    //   {arrayStop.map((item, index) => (
    //     <StopItem
    //       key={index}
    //       id={item.id}
    //       newStop={item.new}
    //       place={item.value}
    //       deleteStop={deleteStop}
    //       addStop={addStop}
    //       setplace={setplace}
    //       autoComplete={autoComplete}
    //     />
    //   ))}
    // </div>

    <Box
      sx={{
        // background:"red",
        width: "50%",
      }}
    >
      {arrayStop.map((item, index) => (
        <StopItem
          key={index}
          id={item.id}
          newStop={item.new}
          place={item.value}
          deleteStop={deleteStop}
          addStop={addStop}
          setplace={setplace}
        />
      ))}
    </Box>
  );
};

export default Stop;
