import HomeFormPortal from "../../portals/HomeFormPortal";
import classes from "./RegisterModal.module.css";
import { useDispatch } from "react-redux";
import { registerModalActions } from "../../features/registerModal";
import { loginModalActions } from "../../features/loginModal";

import Register from "../Register/Register";

const RegisterModal = () => {
  const dispatch = useDispatch();

  const closeResandOpenLogHandler = () => {
    dispatch(registerModalActions.setIsRegisterModal());
    dispatch(loginModalActions.setIsLoginModal());
  };

  return (
    <HomeFormPortal>
      <Register />
      <p className={classes.p}>
        Already have an account?{" "}
        <span className={classes.a} onClick={closeResandOpenLogHandler}>
          Log in
        </span>
      </p>
    </HomeFormPortal>
  );
};

export default RegisterModal;
