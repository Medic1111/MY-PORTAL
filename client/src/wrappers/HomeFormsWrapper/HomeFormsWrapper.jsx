import classes from "./HomeFormWrappers.module.css";

const HomeFormWrappers = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default HomeFormWrappers;
