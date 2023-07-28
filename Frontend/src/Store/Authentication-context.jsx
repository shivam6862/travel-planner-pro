"use client";
import React, { useState, createContext } from "react";

const AuthenticationContext = createContext({
  open: {
    signupOpen: false,
    ResetPasswordOpen: false,
    LogInOpen: false,
    error: "",
  },
  details: {
    phone: "",
    name: "",
    email: "",
  },
  onShow: () => {},
  onHide: () => {},
  setDetails: () => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [open, setOpen] = useState({
    signupOpen: false,
    ResetPasswordOpen: false,
    LogInOpen: false,
    error: "",
  });

  const [details, setDetails] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const showHandler = (name) => {
    if (name === "ResetPasswordOpen") {
      setOpen({
        error: "",
        LogInOpen: false,
        [name]: true,
        signupOpen: false,
      });
    } else if (name === "signupOpen") {
      setOpen({
        error: "",
        ResetPasswordOpen: false,
        [name]: true,
        LogInOpen: false,
      });
    } else if (name === "LogInOpen") {
      setOpen({
        error: "",
        ResetPasswordOpen: false,
        [name]: true,
        signupOpen: false,
      });
    }
  };

  const hideHandler = (name) => {
    if (name === "all") {
      setOpen({
        signupOpen: false,
        ResetPasswordOpen: false,
        LogInOpen: false,
        error: "",
      });
    } else {
      setOpen({ ...open, [name]: false });
    }
  };

  const setNewDetails = (phone, name, email) => {
    setDetails({
      phone: phone,
      name: name,
      email: email,
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        open: open,
        onShow: showHandler,
        onHide: hideHandler,
        setDetails: setNewDetails,
        details: details,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
