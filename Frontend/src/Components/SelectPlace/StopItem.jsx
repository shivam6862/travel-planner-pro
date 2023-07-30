import React from "react";
import AllStopButton from "./AllStopButton";
import classes from "../../styles/Stop.module.css";

const StopItem = ({ id, deleteStop, addStop, newStop, place, setplace }) => {
  return (
    <div className={classes.containerItem}>
      <div className={classes.input}>
        <input
          type="text"
          value={place}
          placeholder="Stop"
          onChange={(e) => {
            setplace(e.target.value, id);
          }}
        />
      </div>
      <AllStopButton
        id={id}
        deleteStop={deleteStop}
        addStop={addStop}
        newStop={newStop}
      />
    </div>
  );
};

export default StopItem;
