"use client";
import React, { useState, useContext } from "react";
import classes from "../../Styles/Auth.module.css";
import Svgcross from "../../../Public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";

const ResetPassword = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState({
    email: "",
    open: false,
    error: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await Auth({ email: values.email }, "resetpassword");
    if (response == "Success") {
      setValues({ email: "", open: true, error: "" });
      AuthenticationCtx.onHide("ResetPasswordOpen");
    }
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("ResetPasswordOpen");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div
          className={classes.close}
          onClick={() => {
            hideHandler();
          }}
        >
          <Svgcross />
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Reset Password</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("LogInOpen");
              }}
            >
              <span>or</span> login to your account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/logo.jpeg" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input
            type="email"
            placeholder="Enter email id"
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className={classes.continue} onClick={submit}>
          <a>Reset Password</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
