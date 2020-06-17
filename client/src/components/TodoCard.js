import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  date: {
    fontSize: 14,
    float: "left",
  },
  iconButton: {
    float: "right",
    margin: "0",
    padding: "0",
  },
  icon: {
    fontSize: 16,
    color: "black",
  },
  title: {
    clear: "both",
    float: "left",
  },
  checkBox: {
    clear: "both",
    float: "left",
  },

  percent: {
    color: "#00BB00",
    float: "right",
  },
});

export default function TodoCard({ data, isMine, isVisible }) {
  const classes = useStyles();
  const todo = data.todo.split(",");
  const check = data.ck.split(",").map((ck) => {
    return parseInt(ck);
  });

  let settingButton = null;

  if (isMine) {
    settingButton = (
      <IconButton className={classes.iconButton}>
        <Icon className={classes.icon} color="primary" on>
          settings
        </Icon>
      </IconButton>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {data.date} &middot; {data.name}
        </Typography>

        {settingButton}

        <Typography className={classes.title} variant="h6">
          {data.title}
        </Typography>
        {/* <Typography className={classes.percent} variant="h6">
          99%
        </Typography> */}
        {todo.map((item, idx) => {
          return (
            <FormControlLabel
              className={classes.checkBox}
              control={<Checkbox />}
              checked={check[idx]}
              label={item}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
