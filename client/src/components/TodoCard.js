import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import SettingButton from "./SettingButton.js";

const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
  },
  date: {
    fontSize: "0.8rem",
    float: "left",
  },
  title: {
    fontSize: "1.4rem",
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

export default function TodoCard({ data, isMine }) {
  const classes = useStyles();
  const [render, setRender] = useState(0);
  const todo = data.todo.split(",").map((text) => {
    return text;
  });
  const [checkState, setCheckState] = useState(
    data.ck.split(",").map((ck) => {
      return parseInt(ck);
    })
  );

  const handleCheck = (idx) => {
    if (localStorage["userName"] === data.name) {
      let tempArr = checkState;
      tempArr[idx] = tempArr[idx] ? 0 : 1;
      setCheckState(tempArr);
      data.ck = tempArr.join(",");
      setRender([]);
      modifyApi({
        isPublic: data.isPublic,
        name: localStorage["userName"],
        date: data.date,
        time: data.time,
        title: data.title,
        todo: data.todo,
        ck: tempArr.join(","),
      });
    } else {
      alert("You can't modify other people's list.");
    }
  };

  const modifyApi = (data) => {
    return fetch("/api/updatecard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.date} gutterBottom>
            {" "}
            {data.name} &middot; {data.time}
          </Typography>

          <SettingButton isMine={isMine} data={data}></SettingButton>

          <Typography className={classes.title} variant="h6">
            {data.title}
          </Typography>
          <Typography className={classes.percent} variant="h6">
            {checkState.reduce((a, b) => a + b)}/{checkState.length}
          </Typography>
          {todo.map((item, idx) => {
            return (
              <FormControlLabel
                key={idx}
                className={classes.checkBox}
                control={<Checkbox onClick={(e) => handleCheck(idx)} />}
                checked={Boolean(checkState[idx])}
                label={item}
              />
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
