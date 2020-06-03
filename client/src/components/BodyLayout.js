import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

import TodoCard from "./TodoCard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e9e9e9",
    paddingTop: "4rem",
    marginTop: "0",
  },
  item: {
    marginLeft: "auto",
    marginRight: "auto",
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
    return <p>ㄱㄷㄱㄷ</p>;
  } else {
    console.log(123);
    console.log(data);
    return (
      <Container className={classes.root} maxwidth="sm">
        <Grid className={classes.item} container spacing={3}>
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
    );
  }
}
