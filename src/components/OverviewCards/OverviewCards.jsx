import React from "react";
import classes from "./OverviewCards.module.css";
import OverviewCard from "./OverviewCard/OverviewCard";
const OverviewCards = props => {
  return (
    <section className={classes.OverviewCards}>
      <h1 className={props.isDark ? classes.Dark : null}>Overview - Today</h1>
      <div className={classes.Cards}>
        {props.data.map(overview => (
          <OverviewCard
            isDark={props.isDark}
            overview={overview}
            key={(overview.platform + overview.type).split(" ").join("")}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewCards;
