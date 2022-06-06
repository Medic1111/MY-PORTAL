import classes from "./PortalContentWrapper.module.css";

const PortalContentWrapper = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};
export default PortalContentWrapper;
