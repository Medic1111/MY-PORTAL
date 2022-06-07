import classes from "./PortalHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginStatusActions } from "../../features/loginStatus";
import { currentStudentActions } from "../../features/currentStudent";
import { currentClassActions } from "../../features/currentClass";
import axios from "axios";

const PortalHeader = () => {
  const dispatch = useDispatch();

  const student = useSelector(
    (state) => state.CurrentStudentReducer.currentStudent
  );

  const logOutHandler = () => {
    axios.put(`/api/${student._id}/logout`, student).then((serverRes) => {
      if (serverRes.status === 204) {
        dispatch(loginStatusActions.setIsLoggedIn());
        dispatch(currentStudentActions.setCurrentStudent({}));
        dispatch(currentStudentActions.clearCurrentClass());
        dispatch(currentClassActions.setIsClass(false));
      } else {
        console.log("No Success Updating Info");
      }
    });
  };

  return (
    <header className={classes.header}>
      <h3 className={classes.h3}>Welcome {student.name} </h3>
      <button className={classes.btn} onClick={logOutHandler}>
        Log out
      </button>
    </header>
  );
};

export default PortalHeader;
