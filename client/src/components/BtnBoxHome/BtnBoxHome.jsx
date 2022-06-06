import React from "react";
import classes from "./BtnBoxHome.module.css";
import { useDispatch } from "react-redux";
import { loginModalActions } from "../../features/loginModal";
import { registerModalActions } from "../../features/registerModal";

const BtnBoxHome = () => {
  const dispatch = useDispatch();

  const showLoginModalHandler = () => {
    dispatch(loginModalActions.setIsLoginModal());
  };

  const showRegisterModalHandler = () => {
    dispatch(registerModalActions.setIsRegisterModal());
  };

  return (
    <div className={classes.btnBox}>
      <button className={classes.btn} onClick={showLoginModalHandler}>
        Login
      </button>
      <button className={classes.btn} onClick={showRegisterModalHandler}>
        Register
      </button>
    </div>
  );
};

export default BtnBoxHome;
