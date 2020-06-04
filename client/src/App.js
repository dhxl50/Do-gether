import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import BodyLayout from "./components/BodyLayout.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{

  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <BodyLayout />
    </div>
  );
}

export default App;
