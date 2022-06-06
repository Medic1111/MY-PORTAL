import classes from "./MainClass.module.css";
import { useSelector } from "react-redux";
import Assigments from "../Assigments/Assigments";
import EditAssigments from "../EditAssigments/EditAssigments";

const MainClass = () => {
  const isClass = useSelector((state) => state.CurrentClassReducer.isClass);

  const currentClass = useSelector(
    (state) => state.CurrentStudentReducer.currentClass
  );

  return (
    <main className={classes.main}>
      <div className={classes.div}>
        <p className={classes.p}>{currentClass.name}</p>
        <p className={classes.p}> Grade: {currentClass.grade}</p>
      </div>
      {isClass && <Assigments currentClass={currentClass} />}
      {isClass && <EditAssigments />}
    </main>
  );
};

export default MainClass;
