import HomeFormPortal from "../../portals/HomeFormPortal";
import classes from "./LoginModal.module.css";
import { useDispatch } from "react-redux";
import { loginModalActions } from "../../features/loginModal";
import { registerModalActions } from "../../features/registerModal";
import Login from "../Login/Login";

const LoginModal = () => {
  const dispatch = useDispatch();

  const closeLogAndOpenRegHandler = () => {
    dispatch(registerModalActions.setIsRegisterModal());
    dispatch(loginModalActions.setIsLoginModal());
  };

  return (
    <HomeFormPortal>
      <Login />
      <p className={classes.p}>
        Don't have an account?{" "}
        <span className={classes.a} onClick={closeLogAndOpenRegHandler}>
          Create Account
        </span>
      </p>
    </HomeFormPortal>
  );
};

export default LoginModal;
