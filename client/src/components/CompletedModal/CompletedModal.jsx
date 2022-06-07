import classes from "./CompletedModal.module.css";
import React from "react";
import CompletedPortal from "../../portals/CompletedPortal";
import { useDispatch, useSelector } from "react-redux";
import { completedModalActions } from "../../features/completedModal";
import { currentStudentActions } from "../../features/currentStudent";

const CompletedModal = () => {
  const currentClass = useSelector(
    (state) => state.CurrentStudentReducer.currentClass
  );

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(completedModalActions.setIsModal());
  };

  const clearListHandler = () => {
    dispatch(currentStudentActions.clearList({ name: currentClass.name }));
  };

  return (
    <CompletedPortal>
      <div className={classes.mainBox}>
        <p className={classes.p}>Completed tasks for {currentClass.name} </p>
        <ul className={classes.ul}>
          {currentClass.completed.map((item, index) => {
            return (
              <li id={index} className={classes.li} key={`class_${index}`}>
                <p className={classes.p2}>{item}</p>
              </li>
            );
          })}
        </ul>
        <div className={classes.btnBox}>
          <button className={classes.btn} onClick={clearListHandler}>
            Clear
          </button>
          <button className={classes.btn} onClick={closeModalHandler}>
            Close
          </button>
        </div>
      </div>
    </CompletedPortal>
  );
};

export default CompletedModal;
