import classes from "./AddAssignmentModal.module.css";
import AddAssignmentPortal from "../../portals/AddAssignmentPortal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { currentStudentActions } from "../../features/currentStudent";
import { addAssignmentModalActions } from "../../features/addAssignmentModal";

const AddAssignmentModal = () => {
  const currentClassName = useSelector(
    (state) => state.CurrentStudentReducer.currentClass.name
  );

  const [assignmentInfo, setAssignmentInfo] = useState({
    newAssignment: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setAssignmentInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dispatch = useDispatch();

  const addAssignmentHandler = (event) => {
    event.preventDefault();
    dispatch(addAssignmentModalActions.setIsModal());

    dispatch(
      currentStudentActions.addAssignment({
        name: currentClassName,
        newAssignment: assignmentInfo.newAssignment,
      })
    );
  };

  const closeModalHandler = (event) => {
    event.preventDefault();
    dispatch(addAssignmentModalActions.setIsModal());
  };

  return (
    <AddAssignmentPortal>
      <form className={classes.form}>
        <p className={classes.p}>Whats the new assignment?</p>
        <div className={classes.inputBox}>
          <label className={classes.label} htmlFor="assignment">
            Assignment:
          </label>
          <input
            value={assignmentInfo.newAssignment}
            onChange={inputChangeHandler}
            className={classes.input}
            type="text"
            name="newAssignment"
            id="newAssignment"
          />
        </div>
        <div className={classes.btnBox}>
          <button onClick={addAssignmentHandler} className={classes.btnAdd}>
            Submit
          </button>
          <button onClick={closeModalHandler} className={classes.btnCancel}>
            Cancel
          </button>
        </div>
      </form>
    </AddAssignmentPortal>
  );
};

export default AddAssignmentModal;
