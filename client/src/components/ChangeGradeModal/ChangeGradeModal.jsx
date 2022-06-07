import classes from "./ChangeGradeModal.module.css";
import ChangeGradePortal from "../../portals/ChangeGradePortal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeGradeModalModalActions } from "../../features/changeGradeModal";
import { currentStudentActions } from "../../features/currentStudent";

const ChangeGradeModal = () => {
  const currentClassName = useSelector(
    (state) => state.CurrentStudentReducer.currentClass.name
  );

  const [gradeInfo, setGradeInfo] = useState({
    grade: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setGradeInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dispatch = useDispatch();

  const changeGradeHandler = (event) => {
    event.preventDefault();
    dispatch(
      currentStudentActions.changeGrade({
        name: currentClassName,
        newGrade: gradeInfo.grade,
      })
    );
    dispatch(changeGradeModalModalActions.setIsModal());
  };

  const closeModalHandler = (event) => {
    event.preventDefault();
    dispatch(changeGradeModalModalActions.setIsModal());
  };

  return (
    <ChangeGradePortal>
      <form className={classes.form}>
        <p className={classes.p}>Whats the new grade?</p>
        <div className={classes.inputBox}>
          <label className={classes.label} htmlFor="grade">
            Grade:
          </label>
          <input
            value={gradeInfo.grade}
            onChange={inputChangeHandler}
            className={classes.input}
            type="text"
            name="grade"
            id="grade"
          />
        </div>
        <div className={classes.btnBox}>
          <button onClick={changeGradeHandler} className={classes.btnAdd}>
            Submit
          </button>
          <button onClick={closeModalHandler} className={classes.btnCancel}>
            Cancel
          </button>
        </div>
      </form>
    </ChangeGradePortal>
  );
};

export default ChangeGradeModal;
