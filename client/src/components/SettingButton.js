import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  iconButton: {
    float: "right",
    margin: "0",
    padding: "0",
  },
  icon: {
    fontSize: 16,
    color: "gray",
  },
});

export default function SettingButton() {
  const classes = useStyles();

  return (
    <>
    <IconButton className={classes.iconButton}>
        <Icon className={classes.icon}>
          settings
        </Icon>
      </IconButton>
    </>
  );
}
