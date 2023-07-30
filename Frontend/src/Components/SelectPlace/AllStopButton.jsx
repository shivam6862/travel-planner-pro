import React from "react";
import classes from "../../styles/Stop.module.css";

const AllStopButton = ({ id, deleteStop, addStop, newStop }) => {
  return (
    <div className={classes.options}>
      {newStop ? (
        <div
          className={classes.add}
          onClick={() => {
            addStop(id);
          }}
        >
          <button>+</button>
        </div>
      ) : (
        <div
          className={classes.delete}
          onClick={() => {
            deleteStop(id);
          }}
        >
          <button>-</button>
        </div>
      )}
    </div>
  );
};

export default AllStopButton;
