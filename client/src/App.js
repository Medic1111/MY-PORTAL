import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Portal from "./pages/Portal/Portal";
import axios from "axios";

function App() {
  const loginStatusSelector = useSelector((state) => state.LoginStatusReducer);

  // const fetchApi = () => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message))
  //     .catch((err) => console.log(err));
  // };

  const fetchApi = () => {
    axios
      .get("/api")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(fetchApi, []);

  return (
    <React.Fragment>
      <Home />
      {loginStatusSelector.isLoggedIn && <Portal />}
    </React.Fragment>
  );
}

export default App;
