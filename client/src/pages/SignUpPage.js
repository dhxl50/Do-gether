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
    marginTop: "3.5rem",
    fontSize: 40,
    textAlign: "center",
  },
  idInput: {
    top: "2rem",
    width: "70%",
  },
  nameItput: {
    top: "3rem",
    width: "70%",
  },
  pwInput: {
    top: "4rem",
    width: "70%",
  },
  pwCheck: {
    top: "5rem",
    width: "70%",
  },
  submit: {
    top: "6.5rem",
    width: "70%",
  },
  login: {
    top: "7rem",
    fontSize: 13,
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();

  const [userID, setUserID] = useState();
  const [nickName, setNickName] = useState();
  const [userPW, setUserPW] = useState();
  const [checkPW, setCheckPW] = useState();
  const [matchPW, setMatchPW] = useState(false);

  const signUpApi = (data) => {
    return fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "success") {
          alert("Successfully registered!");
          props.history.push("/login");
        } else {
          alert(result.message);
        }
      });
  };

  const handleSubmit = () => {
    if (!userID || !nickName || !userPW || !checkPW) {
      alert("All blanks must be filled. Try agian.");
    } else if (matchPW === true) {
      alert("Passwords do not match.");
    } else {
      signUpApi({
        userID: userID,
        userPW: userPW,
        userName: nickName,
      });
    }
  };

  const checkEnter = ()=>{
    if(window.event.keyCode === 13){
      handleSubmit();
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container className={classes.grid}>
          <div className={classes.title}>SIGN UP</div>
          <TextField
            required
            className={classes.idInput}
            label="ID"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setUserID(e.target.value);
            }}
            onKeyUp={checkEnter}
          />
          <TextField
            required
            className={classes.nameItput}
            label="NickName"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            onKeyUp={checkEnter}
          />
          <TextField
            required
            className={classes.pwInput}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setUserPW(e.target.value);
            }}
            onKeyUp={checkEnter}
          />
          <TextField
            required
            error={matchPW}
            className={classes.pwCheck}
            label="Re-enter Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="small"
            onChange={(e) => {
              const value = e.target.value;
              setCheckPW(value);
              if (value !== userPW) {
                setMatchPW(true);
              } else {
                setMatchPW(false);
              }
            }}
            onKeyUp={checkEnter}
          />
          <Button
            className={classes.submit}
            variant="outlined"
            size="small"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <div className={classes.login}>
            <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
              Click here to return to the login page
            </Link>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}
