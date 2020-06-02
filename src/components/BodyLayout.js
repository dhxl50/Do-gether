import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import TodoCard from "./TodoCard.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1rem",
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
          <TodoCard></TodoCard>
        </Grid>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard></TodoCard>
        </Grid>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard></TodoCard>
        </Grid>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard></TodoCard>
        </Grid>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard></TodoCard>
        </Grid>
        <Grid item xs="6" sm="6" md="3">
          <TodoCard></TodoCard>
        </Grid>
        
      </Grid>
    </Container>
  );
}
