import React from "react";
import ReactDOM from "react-dom";
import classes from "./CompletedPortal.module.css";

const portal = document.getElementById("addAssignmentPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const AddAssignmentPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default AddAssignmentPortal;
