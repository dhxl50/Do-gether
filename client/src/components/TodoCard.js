import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    margin:10
  },
  date: {
    fontSize: 14,
    float: "left",
  },
  icon: {
    fontSize: 18,
    float: "right",
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

export default function TodoCard(props) {
  const classes = useStyles();
  const data = props.data;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {data.date} &middot; {data.name} &middot; {data.isPublic}
        </Typography>

        <Icon className={classes.icon} color="primary">
          settings
        </Icon>

        <Typography className={classes.title} variant="h6">
          {data.title}
        </Typography>
        <Typography className={classes.percent} variant="h6">
          99%
        </Typography>

        {data.todo.map((todo) => {
          return (
            <FormControlLabel
              className={classes.checkBox}
              control={<Checkbox />}
              label={todo}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
