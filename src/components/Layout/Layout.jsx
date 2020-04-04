import React from "react";
import Toggle from "../Toggle/Toggle";
import classes from "./Layout.module.css";
const Layout = props => {
  return (
    <>
      <header className={props.isDark ? classes.Dark : null}>
        <div className={classes.Title}>
          <h2>Social Media Dashboard</h2>
          <p className={props.isDark ? classes.Dark : null}>
            Total Follower: 23,004
          </p>
        </div>
        <div
          className={[classes.Belt, props.isDark ? classes.Dark : null].join(
            " "
          )}
        />
        <Toggle isDark={props.isDark} toggleDarkMode={props.toggleDarkMode} />
      </header>
      <main className={props.isDark ? classes.Dark : null}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
