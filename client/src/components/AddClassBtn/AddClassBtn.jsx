import React from "react";
import classes from "./AddClassBtn.module.css";
import { useDispatch } from "react-redux";
import { addClassModalActions } from "../../features/addClassModal";
const AddClassBtn = () => {
  const dispatch = useDispatch();

  const addClassHandler = () => {
    dispatch(addClassModalActions.setIsModal());
  };

  return (
    <React.Fragment>
      <button onClick={addClassHandler} className={classes.btn}>
        Add Class
      </button>
    </React.Fragment>
  );
};

export default AddClassBtn;
