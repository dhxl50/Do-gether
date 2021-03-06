import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import CircularProgress from "@material-ui/core/CircularProgress";

import TodoCard from "./TodoCard.js";
import AddButton from "./AddButton.js";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flexGrow: 1,
    paddingTop: "4rem",
    paddingBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  date: {
    width: "100%",
    paddingLeft: "1rem",
    paddingTop: "1rem",
    color: "white",
  },
  iconButton: {
    margin: "0",
    padding: "0",
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  icon: {
    fontSize: 70,
    color: "white",
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
        <Container key="container" className={classes.container} maxwidth="md">
          <Grid className={classes.item} container>
            {data.map((card, idx) => {
              let isVisible = card.isPublic;
              let showDate = null;
              const isMine = card.name === localStorage["userName"]; //remove item
              if (idx === 0 || card.date !== data[idx - 1].date) {
                showDate = (
                  <Typography
                    key={card.date}
                    variant="h4"
                    className={classes.date}
                  >
                    {card.date}
                  </Typography>
                );
              }

              if (isMine) {
                isVisible = 1;
              }

              if (isVisible === 1) {
                return (
                  <>
                    {showDate}
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                      <TodoCard
                        key={card.title}
                        data={card}
                        isVisible={isVisible}
                        isMine={isMine}
                      />
                    </Grid>
                  </>
                );
              } else {
                return <>{showDate}</>;
              }
            })}
          </Grid>
          <AddButton></AddButton>
        </Container>
      </div>
    );
  }
}
