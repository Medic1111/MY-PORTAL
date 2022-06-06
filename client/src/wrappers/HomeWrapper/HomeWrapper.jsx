import classes from "./HomeWrapper.module.css";

const HomeWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

export default HomeWrapper;
