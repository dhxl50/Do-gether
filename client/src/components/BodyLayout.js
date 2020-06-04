import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

import TodoCard from "./TodoCard.js";

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor:"rgba(0,0,0,0.5)"
  },
  container: {
    flexGrow: 1,
    paddingTop:"4rem",
    paddingBottom:"1rem",
    marginLeft: "auto",
    marginRight: "auto"
  },
  item: {
  },
}));

const callApi = async () => {
  const response = await fetch("/api/cards");
  const body = await response.json();
  return body;
};

export default function BodyLayout() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    callApi()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });

  if (!data) {
    return <p>Loading....</p>;
  } else {
    return (
      <div className={classes.root}>
      <Container className={classes.container} maxwidth="md">
        <Grid className={classes.item} container spacing={0}>
          {data.map((data) => {
            return (
              <Grid item xs="6" sm="6" md="3">
                <TodoCard data={data} />
              </Grid>
            );
          })}
          <Grid item xs="6" sm="6" md="3">
            <Icon style={{ fontSize: 60 }}>add_circle</Icon>
          </Grid>
        </Grid>
      </Container>
      </div>
    );
  }
}
