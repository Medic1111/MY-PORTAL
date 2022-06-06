import classes from "./PortalPortal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const portal = document.getElementById("PortalPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const PortalPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default PortalPortal;
