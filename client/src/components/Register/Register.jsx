import classes from "./Register.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentStudentActions } from "../../features/currentStudent";
import { loginStatusActions } from "../../features/loginStatus";

import studentsList from "../../data/studentsList";

const Register = () => {
  const dispatch = useDispatch();

  const [isRegistered, setIsRegistered] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    name: "",
    studentId: "",
    email: "",
    password: "",
    classes: [],
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudentInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();

    const alreadyRegisteredEmail = studentsList.find((obj, index) => {
      return obj.email === studentInfo.email;
    });

    const alreadyRegisteredId = studentsList.find((obj, index) => {
      return obj.studentId === studentInfo.studentId;
    });

    if (alreadyRegisteredEmail || alreadyRegisteredId) {
      setIsRegistered(true);
    } else {
      if (
        studentInfo.name.length >= 2 &&
        studentInfo.studentId.length >= 1 &&
        studentInfo.email.includes("@") &&
        studentInfo.password.length >= 4
      ) {
        dispatch(currentStudentActions.setCurrentStudent(studentInfo));
        dispatch(loginStatusActions.setIsLoggedIn());
        studentsList.push(studentInfo);
        setIsRegistered(false);
      }
    }
  };

  return (
    <form className={classes.form}>
      <h3 className={classes.h3}>Register</h3>
      <div className={classes.inputBox}>
        {isRegistered && <p>Email or Id already registered</p>}
        <input
          onChange={inputChangeHandler}
          name="studentId"
          value={studentInfo.studentId}
          className={classes.input}
          type="text"
          placeholder="Student ID"
        />
        <input
          onChange={inputChangeHandler}
          name="name"
          value={studentInfo.name}
          className={classes.input}
          type="text"
          placeholder="Name"
        />

        <input
          value={studentInfo.email}
          name="email"
          onChange={inputChangeHandler}
          className={classes.input}
          type="email"
          placeholder="Student Email"
        />

        <input
          value={studentInfo.password}
          name="password"
          onChange={inputChangeHandler}
          className={classes.input}
          type="password"
          placeholder="Password"
        />
      </div>
      <button className={classes.btn} onClick={registerHandler}>
        Register
      </button>
    </form>
  );
};

export default Register;
