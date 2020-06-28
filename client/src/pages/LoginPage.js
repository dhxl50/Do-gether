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
    width: "80%",
    maxWidth: "25rem",
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
    top: "7.9rem",
    fontSize: 13,
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();

  const [userID, setUserID] = useState();
  const [userPW, setUserPW] = useState();

  const loginApi = (data) => {
    return fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "login sucessfull") {
          localStorage.userName = result.username;
          window.location.href = "/main";
        } else {
          alert(result.message);
        }
      });
  };

  const handleLogin = () => {
    if (!userID || !userPW) {
      alert("All blanks must be filled. Try agian.");
    } else {
      loginApi({
        userID: userID,
        userPW: userPW,
      });
    }
  };

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
          <Button
            className={classes.signin}
            variant="outlined"
            size="small"
            onClick={handleLogin}
          >
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
