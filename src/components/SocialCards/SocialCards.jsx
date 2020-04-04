import React from "react";
import SocialCard from "./SocialCard/SocialCard";
import classes from "./SocialCards.module.css";
const SocialCards = props => {
  return (
    <div className={classes.SocialCards}>
      {props.data.map(profile => (
        <SocialCard
          isDark={props.isDark}
          profile={profile}
          key={profile.platform}
        />
      ))}
    </div>
  );
};

export default SocialCards;
