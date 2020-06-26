import React, { useState } from "react";
import ModifyControl from "./ModifyControl.js";

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

export default function SettingButton({data, isMine }) {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(true);
    console.log(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isMine) {
    if (!open) {
      return (
        <>
          <IconButton className={classes.iconButton} onClick={handleOpen}>
            <Icon className={classes.icon}>settings</Icon>
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <ModifyControl handleClose={handleClose} data={data}/>
        </>
      );
    }
  } else {
    return <></>;
  }
}
