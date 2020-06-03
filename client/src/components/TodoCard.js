import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {},
  date: {
    fontSize: 14,
    float: "left",
  },
  icon: {
    marginRight: "1%",
    float: "right",
    color: "black",
  },
  title: {
    clear: "both",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TodoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {props.data.date}
        </Typography>
        <Icon className={classes.icon} color="primary">
          settings
        </Icon>
        <Typography className={classes.title} variant="h5" component="h2">
          {props.data.title}
        </Typography>
        {props.data.todo.map((todo) => {
          return (
            <div>
              <FormControlLabel control={<Checkbox />} label={todo} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
