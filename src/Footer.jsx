import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="" alt="" className="footer__albumImg" />
        <div className="footer__songInfo">
          <h4>Leave out all the rest</h4>
          <p>Linkin Park</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlinedIcon className="footer__green" />
        <SkipPreviousOutlinedIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextOutlinedIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
