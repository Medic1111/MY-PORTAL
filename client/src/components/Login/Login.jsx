import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginStatusActions } from "../../features/loginStatus";
import { currentStudentActions } from "../../features/currentStudent";
import studentsList from "../../data/studentsList";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [noMatch, setNoMatch] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    studentId: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudentInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dispatch = useDispatch();

  // const loginHandler = (event) => {
  //   event.preventDefault();

  //   const isItThere = studentsList.find((obj, index) => {
  //     return obj.studentId === studentInfo.studentId;
  //   });
  //   const doesPasswordMatch = isItThere.password === studentInfo.password;

  //   if (isItThere && doesPasswordMatch) {
  //     dispatch(loginStatusActions.setIsLoggedIn());
  //     dispatch(currentStudentActions.setCurrentStudent(isItThere));
  //     setNoMatch(false);
  //   } else {
  //     setNoMatch(true);
  //   }
  // };

  const loginHandler = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", studentInfo)
      .then((serverRes) => {
        let student = serverRes.data[0];
        if (serverRes.data.length <= 0) {
          setNoMatch(true);
        } else {
          dispatch(loginStatusActions.setIsLoggedIn());
          dispatch(currentStudentActions.setCurrentStudent(student));
          setNoMatch(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={classes.form}>
      <h3 className={classes.h3}>Login</h3>
      <div className={classes.inputBox}>
        {noMatch && <p>Student Id or Password doesn't match</p>}
        <input
          className={classes.input}
          type="text"
          placeholder="Student ID"
          value={studentInfo.studentId}
          onChange={inputChangeHandler}
          name="studentId"
        />
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          value={studentInfo.password}
          onChange={inputChangeHandler}
          name="password"
        />
      </div>
      <button className={classes.btn} onClick={loginHandler}>
        Login
      </button>
    </form>
  );
};

export default Login;
