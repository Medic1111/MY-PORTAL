import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Portal from "./pages/Portal/Portal";
import axios from "axios";

function App() {
  const loginStatusSelector = useSelector((state) => state.LoginStatusReducer);

  return (
    <React.Fragment>
      <Home />
      {loginStatusSelector.isLoggedIn && <Portal />}
    </React.Fragment>
  );
}

export default App;
