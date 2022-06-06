import classes from "./Assigments.module.css";
import { useDispatch, useSelector } from "react-redux";

import { currentStudentActions } from "../../features/currentStudent";

const Assigments = ({ currentClass }) => {
  const dispatch = useDispatch();
  const currentClassName = useSelector(
    (state) => state.CurrentStudentReducer.currentClass.name
  );

  const deleteHandler = (event) => {
    let indexToDel = Number(event.target.name);
    dispatch(
      currentStudentActions.deleteAssignment({
        name: currentClassName,
        indexToDel,
      })
    );
  };

  const completeHandler = (event) => {
    let indexToPush = Number(event.target.name);
    dispatch(
      currentStudentActions.deleteAssignment({
        name: currentClassName,
        indexToDel: indexToPush,
      })
    );

    dispatch(
      currentStudentActions.addToCompleted({
        name: currentClass.name,
        completedTask: currentClass.assignments[indexToPush],
      })
    );
  };

  return (
    <ul className={classes.ul}>
      {currentClass.assignments.map((item, index) => {
        return (
          <li id={index} className={classes.li} key={`class_${index}`}>
            <p className={classes.p}>{item}</p>
            <div className={classes.div}>
              <span
                className={classes.span}
              >{`${new Date().getDate()}/${new Date().getMonth()}`}</span>

              <button
                className={classes.btn}
                name={index}
                onClick={deleteHandler}
              >
                ✗
              </button>
              <button
                className={classes.btn}
                name={index}
                onClick={completeHandler}
              >
                ✔︎
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Assigments;
