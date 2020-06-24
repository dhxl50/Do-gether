import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import SettingButton from "./SettingButton.js";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  date: {
    fontSize: 14,
    float: "left",
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


export default function TodoCard({ data, isMine}) {
  const classes = useStyles();
  const [render, setRender] = useState(0);
  const todo = data.todo.split(",").map((text)=>{
      return text;
  });
  const [checkState, setCheckState] = useState(data.ck.split(",").map((ck) => {
      return parseInt(ck);
  }))
  let settingButton = null;

  const handleCheck = (idx) => {
    let tempArr = checkState;
    tempArr[idx] = tempArr[idx]?0:1;
    setCheckState(tempArr);
    setRender([]);
  };


  if (isMine) {
    settingButton = (
      <SettingButton></SettingButton>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date}  gutterBottom> {/*color="textSecondary"*/}
           {data.name} &middot; {data.time} 
        </Typography>

        {settingButton}

        <Typography className={classes.title} variant="h6">
          {data.title}
        </Typography>
        <Typography className={classes.percent} variant="h6">

          {checkState.reduce((a, b) => a + b)}/{checkState.length}
        </Typography>
        {todo.map((item, idx) => {
          return (
            <FormControlLabel
              className={classes.checkBox}
              control={<Checkbox onClick={e=>(handleCheck(idx))}/>}
              checked={checkState[idx]}
              label={item}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
