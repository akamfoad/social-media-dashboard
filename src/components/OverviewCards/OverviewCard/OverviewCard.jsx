import React from "react";
import classes from "./OverviewCard.module.css";
import INC from "../../../asset/images/icon-up.svg";
import DEC from "../../../asset/images/icon-down.svg";
import facebook from "../../../asset/images/icon-facebook.svg";
import instagram from "../../../asset/images/icon-instagram.svg";
import twitter from "../../../asset/images/icon-twitter.svg";
import youtube from "../../../asset/images/icon-youtube.svg";
const STATUS = { INC, DEC };
const PLATFORMS = { facebook, instagram, twitter, youtube };

const OverviewCard = props => {
  const { platform, type, status, number, current } = props.overview;
  return (
    <div
      className={[
        classes.OverviewCard,
        props.isDark ? classes.Dark : null
      ].join(" ")}
    >
      <div className={classes.UPPER}>
        <h5>{type}</h5>
        <img src={PLATFORMS[platform]} alt={platform} />
      </div>
      <div className={classes.LOWER}>
        <h2>{current}</h2>
        <div className={classes.STAT}>
          <img src={STATUS[status]} alt={status} />
          <small
            style={{
              color: status === "INC" ? "#1EB589" : "#DC414C"
            }}
          >{`${number}%`}</small>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
