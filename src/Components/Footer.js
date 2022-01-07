import React, { Component } from "react";
import images from "../Assets/assets.js";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    main: {
      background: "white",
    },
    headerimg: {
      width: "100%",
    },

    hospitalimg: {
      width: "50%",
      marginRight: "25%",
      marginLeft: "25%",
      marginTop: "-15%",
      marginBottom: "15%",
    },
    serviceimg: {
      width: "80%",
      marginBottom: "30%",
      marginLeft: "10%",
      marginTop: "10%",
    },
    headertxt: {
      position: "absolute",
      marginTop: "10%",
      width: "100%",
      textAlign: "center",
      color: "white",
      fontSize: "5vw",
      fontWeight: 900,
    },
    headersubtxt: {
      position: "absolute",
      marginTop: "20%",
      width: "100%",
      textAlign: "center",
      color: "white",
      fontSize: "3vw",
      fontWeight: 700,
      fontStyle: "italic",
    },
    footer: {
      left: 0,
      backgroundColor: "white",
      width: "100%",
      paddingTop: "10%",
      position: "relative",
      bottom: 0,
    },
    headertxtservice: {
      width: "100%",
      textAlign: "center",
      color: "black",
      fontSize: "5vw",
      fontWeight: 900,
    },
    headersubtxtservice: {
      width: "100%",
      textAlign: "justify",
      color: "black",
      fontSize: "2vw",
      fontWeight: 700,
      fontStyle: "italic",
      marginLeft: "10%",
    },
  };
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <img src={images.footer} className={classes.headerimg} />
    </div>
  );
};

export default Footer;
