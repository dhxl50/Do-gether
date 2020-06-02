import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          2020-03-26
        </Typography>
        <Typography variant="h5" component="h2">
          Todo Main
        </Typography>
        <div>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="똥싸기"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="똥싸기"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="똥싸기"
          />
        </div>
        <Button size="small">Learn More</Button>
      </CardContent>
      </Card>
  );
}
