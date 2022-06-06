import classes from "./HomeFormPortal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const portal = document.getElementById("homeFormPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const HomeFormPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default HomeFormPortal;
