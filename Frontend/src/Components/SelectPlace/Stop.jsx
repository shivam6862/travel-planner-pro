import React, { useState } from "react";
import StopItem from "./StopItem";
import classes from "../../styles/Stop.module.css";
import { v4 } from "uuid";

const Stop = () => {
  const [arrayStop, setArrayStop] = useState([
    { id: v4(), value: "", new: true },
  ]);

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

  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default Stop;
