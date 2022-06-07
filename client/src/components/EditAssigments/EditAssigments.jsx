import classes from "./EditAssigments.module.css";
import { useDispatch } from "react-redux";
import { changeGradeModalModalActions } from "../../features/changeGradeModal";
import { addAssignmentModalActions } from "../../features/addAssignmentModal";
import { completedModalActions } from "../../features/completedModal";

const EditAssigments = () => {
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
