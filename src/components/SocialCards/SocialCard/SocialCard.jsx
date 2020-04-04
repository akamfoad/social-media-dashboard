import React from "react";
import INC from "../../../asset/images/icon-up.svg";
import DEC from "../../../asset/images/icon-down.svg";
import facebook from "../../../asset/images/icon-facebook.svg";
import instagram from "../../../asset/images/icon-instagram.svg";
import twitter from "../../../asset/images/icon-twitter.svg";
import youtube from "../../../asset/images/icon-youtube.svg";
import classes from "./SocialCard.module.css";
const STATUS = { INC, DEC };
const PLATFORMS = { facebook, instagram, twitter, youtube };
const SocialCard = props => {
  const { platform, status, username, current, number } = props.profile;
  return (
    <section className={classes[platform.toUpperCase()]}>
      <div
        className={[
          classes.SocialCard,
          props.isDark ? classes.Dark : null
        ].join(" ")}
      >
        <div
          className={[classes.Header, props.isDark ? classes.Dark : null].join(
            " "
          )}
        >
          <img src={PLATFORMS[platform]} alt="" />
          {platform === "youtube" ? (
            <h6>{`${username}`}</h6>
          ) : (
            <h6>{`@${username}`}</h6>
          )}
        </div>
        <div
          className={[classes.CURRENT, props.isDark ? classes.Dark : null].join(
            " "
          )}
        >
          <h1>{current}</h1>
          <p>FOLLOWERS</p>
        </div>
        <div className={classes.STAT}>
          <img src={STATUS[status]} alt={status} />
          <small
            style={{
              color: status === "INC" ? "#1EB589" : "#DC414C"
            }}
          >{`${number} Today`}</small>
        </div>
      </div>
    </section>
  );
};

export default SocialCard;
