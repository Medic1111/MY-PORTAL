import classes from "./ClassListBtn.module.css";
import { useDispatch } from "react-redux";
import { currentClassActions } from "../../features/currentClass";
import { currentStudentActions } from "../../features/currentStudent";

const ClassListBtn = ({ classObj, index }) => {
  const dispatch = useDispatch();

  const showClassHandler = () => {
    dispatch(currentClassActions.setIsClass(true));
    dispatch(currentStudentActions.setCurrentClass({ index }));
  };

  return (
    <button onClick={showClassHandler} className={classes.btn}>
      {classObj.name}
    </button>
  );
};

export default ClassListBtn;
