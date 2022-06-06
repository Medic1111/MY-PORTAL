import classes from "./Aside.module.css";
import { useSelector } from "react-redux";
import ClassListBtn from "../ClassListBtn/ClassListBtn";
import AddClassBtn from "../AddClassBtn/AddClassBtn";

const Aside = () => {
  const student = useSelector(
    (state) => state.CurrentStudentReducer.currentStudent
  );

  const areThereClasses = student.classes.length >= 1;

  return (
    <aside className={classes.aside}>
      <p className={classes.p}>
        {areThereClasses ? "My CLasses" : "No Classes yet"}
      </p>
      {areThereClasses && (
        <div className={classes.classBox}>
          {student.classes.map((obj, index) => {
            return <ClassListBtn key={index} classObj={obj} index={index} />;
          })}
        </div>
      )}
      <AddClassBtn />
    </aside>
  );
};

export default Aside;
