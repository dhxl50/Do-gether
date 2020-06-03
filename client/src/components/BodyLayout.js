import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Icon from '@material-ui/core/Icon';

import TodoCard from "./TodoCard.js";

const data={
  date:"2020-99-99",
  title:"머휘의 TODO LSIT",
  todo:["응가하기","똥싸기","변누기"]
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#e9e9e9",
    paddingTop:"4rem",
    marginTop:"0"
  },
  item: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxwidth="sm">
      <Grid className={classes.item} container spacing={3}>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard data={data}/>
        </Grid>
        <Grid item xs="6" sm="6" md="3" alignItems="center">
          <Icon style={{ fontSize: 60 }}>add_circle</Icon>
        </Grid>
      </Grid>
    </Container>
  );
}
