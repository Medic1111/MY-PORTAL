import React from "react";
import ReactDOM from "react-dom";
import classes from "./CompletedPortal.module.css";

const portal = document.getElementById("addClassPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const AddClassPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default AddClassPortal;
