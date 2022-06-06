import React from "react";
import BtnBoxHome from "../../components/BtnBoxHome/BtnBoxHome";
import Login from "../../components/Login/Login";
import LoginModal from "../../components/LoginModal/LoginModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import HomeWrapper from "../../wrappers/HomeWrapper/HomeWrapper";
import HomeFormWrapper from "../../wrappers/HomeFormsWrapper/HomeFormsWrapper";
import Register from "../../components/Register/Register";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const Home = () => {
  const loginModalSelector = useSelector((state) => state.LoginModalReducer);
  const registerModalSelector = useSelector(
    (state) => state.RegisterModalReducer
  );
  return (
    <HomeWrapper>
      {loginModalSelector.isLoginModal && <LoginModal />}
      {registerModalSelector.isRegisterModal && <RegisterModal />}
      <Header />
      <HomeFormWrapper>
        <Login />
        <Register />
      </HomeFormWrapper>
      <BtnBoxHome />
    </HomeWrapper>
  );
};

export default Home;
