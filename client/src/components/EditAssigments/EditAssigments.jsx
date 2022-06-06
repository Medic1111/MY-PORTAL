import classes from "./EditAssigments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentStudentActions } from "../../features/currentStudent";
import { changeGradeModalModalActions } from "../../features/changeGradeModal";
import { addAssignmentModalActions } from "../../features/addAssignmentModal";
import { completedModalActions } from "../../features/completedModal";

const EditAssigments = () => {
  // const currentClassName = useSelector(
  //   (state) => state.CurrentStudentReducer.currentClass.name
  // );

  const dispatch = useDispatch();

  const openGradeModalHandler = () => {
    dispatch(changeGradeModalModalActions.setIsModal());
  };

  const openNewAssignmentModalHandler = () => {
    dispatch(addAssignmentModalActions.setIsModal());
  };

  const showCompletedHandler = () => {
    dispatch(completedModalActions.setIsModal());
  };

  return (
    <article className={classes.article}>
      <div className={classes.btnBox}>
        <button onClick={openNewAssignmentModalHandler} className={classes.btn}>
          Add Assigment
        </button>
        <button onClick={showCompletedHandler} className={classes.btn}>
          Completed
        </button>
        <button onClick={openGradeModalHandler} className={classes.btn}>
          Update Grade
        </button>
      </div>
    </article>
  );
};

export default EditAssigments;
