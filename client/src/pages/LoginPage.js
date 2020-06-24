import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  paper: {
    width: "25rem",
    height: "28rem",
    marginTop: "8rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  grid: {
    "& > *": {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  title: {
    width: "100%",
    marginTop: "5rem",
    fontSize: 40,
    textAlign: "center",
  },
  idInput: {
    top: "3.5rem",
    width: "70%",
  },
  pwInput: {
    top: "5.5rem",
    width: "70%",
  },
  signin: {
    top: "7.4rem",
    width: "70%",
  },
  signup: {
    fontSize: 13,
    top: "7.9rem",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const [userID, setUserID] = useState();
  const [userPW, setUserPW] = useState();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container className={classes.grid}>
          <div className={classes.title}>LOGIN</div>
          <TextField
            className={classes.idInput}
            label="ID"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
          <TextField
            className={classes.pwInput}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setUserPW(e.target.value);
            }}
          />
          <Button className={classes.signin} variant="outlined" size="small">
            Login
          </Button>
          <div className={classes.signup}>
            <Link
              to="/signup"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Click here to SIGN UP
            </Link>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}
