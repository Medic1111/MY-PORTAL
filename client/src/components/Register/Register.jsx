import classes from "./Register.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentStudentActions } from "../../features/currentStudent";
import { loginStatusActions } from "../../features/loginStatus";
import axios from "axios";
import { set } from "mongoose";

const Register = () => {
  const dispatch = useDispatch();

  const [isRegistered, setIsRegistered] = useState(false);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [idInvalid, setIdInvalid] = useState(false);

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

    if (
      studentInfo.name.length >= 2 &&
      studentInfo.studentId.length >= 4 &&
      studentInfo.email.includes("@") &&
      studentInfo.password.length >= 6
    ) {
      axios
        .post("/api/register", studentInfo)
        .then((serverRes) => {
          let student = serverRes.data;
          dispatch(currentStudentActions.setCurrentStudent(student));
          dispatch(loginStatusActions.setIsLoggedIn());
          setIsRegistered(false);
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setIsRegistered(true);
          }
        });

      setStudentInfo({
        name: "",
        studentId: "",
        email: "",
        password: "",
        classes: [],
      });

      setEmailInvalid(false);
      setIdInvalid(false);
      setNameInvalid(false);
      setPasswordInvalid(false);
    } else {
      studentInfo.name.length < 2 && setNameInvalid(true);
      studentInfo.studentId.length < 4 && setIdInvalid(true);
      !studentInfo.email.includes("@") && setEmailInvalid(true);
      studentInfo.password.length < 6 && setPasswordInvalid(true);
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
        {idInvalid && <p>ID must be at least 6 characters long</p>}

        <input
          onChange={inputChangeHandler}
          name="name"
          value={studentInfo.name}
          className={classes.input}
          type="text"
          placeholder="Name"
        />
        {nameInvalid && <p>Name field must be filled</p>}

        <input
          value={studentInfo.email}
          name="email"
          onChange={inputChangeHandler}
          className={classes.input}
          type="email"
          placeholder="Student Email"
        />
        {emailInvalid && <p>Please enter a valid email</p>}

        <input
          value={studentInfo.password}
          name="password"
          onChange={inputChangeHandler}
          className={classes.input}
          type="password"
          placeholder="Password"
        />
        {passwordInvalid && <p>Password must be at least 6 characters long</p>}
      </div>
      <button className={classes.btn} onClick={registerHandler}>
        Register
      </button>
    </form>
  );
};

export default Register;
