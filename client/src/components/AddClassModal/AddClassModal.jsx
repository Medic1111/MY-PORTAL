import classes from "./AddClassModal.module.css";
import AddClassPortal from "../../portals/AddClassPortal";
import { useDispatch } from "react-redux";
import { addClassModalActions } from "../../features/addClassModal";
import { currentStudentActions } from "../../features/currentStudent";
import { useState } from "react";

const AddClassModal = () => {
  const [classInfo, setClassInfo] = useState({
    name: "",
    grade: "",
    assignments: [],
    completed: [],
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setClassInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dispatch = useDispatch();

  const addClassHandler = (event) => {
    event.preventDefault();
    dispatch(addClassModalActions.setIsModal());
    dispatch(
      currentStudentActions.addClass({
        newClass: classInfo,
      })
    );
  };

  const closeModalHandler = (event) => {
    event.preventDefault();
    dispatch(addClassModalActions.setIsModal());
  };

  return (
    <AddClassPortal>
      <form className={classes.form}>
        <p className={classes.p}>Add Class</p>
        <div className={classes.inputBox}>
          <label className={classes.label} htmlFor="name">
            Class Name:
          </label>
          <input
            value={classInfo.name}
            onChange={inputChangeHandler}
            className={classes.input}
            type="text"
            name="name"
            id="name"
          />
          <label className={classes.label} htmlFor="grade">
            Current Grade:
          </label>
          <input
            value={classInfo.grade}
            onChange={inputChangeHandler}
            className={classes.input}
            type="text"
            name="grade"
            id="grade"
          />
        </div>
        <div className={classes.btnBox}>
          <button onClick={addClassHandler} className={classes.btnAdd}>
            Submit
          </button>
          <button onClick={closeModalHandler} className={classes.btnCancel}>
            Cancel
          </button>
        </div>
      </form>
    </AddClassPortal>
  );
};

export default AddClassModal;
