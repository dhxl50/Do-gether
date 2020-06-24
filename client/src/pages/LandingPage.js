import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  title: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "17rem",
    width: "15rem",
  },
  content: {
    color: "white",
    textAlign: "center",
    marginTop: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20rem",
  },
  start: {
    color: "white",
    textAlign: "center",
    marginTop: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "7px 0 7px 0",
    width: "10rem",
    backgroundColor: "rgba(225,225,225,0.1)",
    border: "1px solid white",
    borderRadius: "15px",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.title}>Do-gether</p>
      <p className={classes.content}>Sharing your TODO-LIST with others!</p>
      <div className={classes.start}>
        <Link to="/login" style={{textDecoration: "none",color:"white"}}>
          click here to join!
        </Link>
      </div>
    </div>
  );
}
