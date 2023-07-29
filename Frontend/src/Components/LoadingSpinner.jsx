import React from "react";
import Style from "../styles/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={Style.container}>
      <div className={Style.spinner}>
        Loading
        <div className={Style.loading}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
