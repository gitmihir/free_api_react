import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainMenu from "./MainMenu";

const Layout = (props) => {
  return (
    <Fragment>
      <MainMenu />
      <section className={classes.main}>{props.children}</section>
    </Fragment>
  );
};
export default Layout;
