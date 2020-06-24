import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
  root: {
    position:"fixed",
    minHeight:"100vh",
    minWidth:"100vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding:0,
  },
  title:{
    color:"white",
    fontSize: 50,
    textAlign:"center",
    marginLeft : "auto",
    marginRight : "auto",
    marginTop:"15%",
    width: "15rem"
  },
  content:{
    color:"white",
    textAlign:"center",
    marginTop:"1rem",
    marginLeft : "auto",
    marginRight : "auto",
    width: "20rem"
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>Do-gether</p>
      <p className={classes.content}>Sharing your TODO-LIST with others!</p>
    </div>
  );
}
