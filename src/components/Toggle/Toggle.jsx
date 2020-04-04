import React from "react";
import classes from "./Toggle.module.css";

const toggle = props => {
  return (
    <div className={classes.Switch}>
      <div
        className={[classes.Label, props.isDark ? classes.Dark : null].join(
          " "
        )}
      >
        Dark Mode
      </div>
      <label className={classes.Toggle}>
        <input
          type="checkbox"
          checked={props.isDark}
          onChange={props.toggleDarkMode}
        />
        <span className={classes.Slider}></span>
      </label>
    </div>
  );
};

export default toggle;
