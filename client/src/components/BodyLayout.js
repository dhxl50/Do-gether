import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Icon from "@material-ui/core/Icon";
// import CircularProgress from "@material-ui/core/CircularProgress";

import TodoCard from "./TodoCard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flexGrow: 1,
    paddingTop: "4rem",
    paddingBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function BodyLayout() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(1);

  const callApi = async () => {
    const response = await fetch("/api/cards");
    const body = await response.json();
    return body.reverse();
  };

  useEffect(() => {
    callApi()
      .then((res) => {
        setData(res);
        setIsLoading(0);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <></>;
  } else {
    return (
      <div className={classes.root}>
        <Container className={classes.container} maxwidth="md">
          <Grid className={classes.item} container>
            {data.map((card, idx) => {
              if (idx===0 || card.date !== data[idx - 1].date) {
                return (
                  <>
                  <Typography variant="h4" style={{width:"100%", color:"white"}}>{card.date}</Typography>
                    <Grid item xs={6} sm={6} md={3}>
                      <TodoCard key={card.id} data={card} />
                    </Grid>
                  </>
                );
              } else {
                return (
                  <Grid item xs={6} sm={6} md={3}>
                    <TodoCard key={card.id} data={card} />
                  </Grid>
                );
              }
            })}

            {/* <Grid item xs={6} sm={6} md={3}>
              <Icon style={{ fontSize: 60 }}>add_circle</Icon>
            </Grid> */}

          </Grid>
        </Container>
      </div>
    );
  }
}
