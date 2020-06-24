import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalControl from "./ModalControl.js";

import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    margin: "0",
    padding: "0",
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  icon: {
    fontSize: 70,
    color: "black",
  },
  addButton: {
    fontSize: 11,
    float: "right",
    margin: 0,
    marginTop: "1rem",
    marginRight: "1rem",
  },
  buttonGroup: {
    clear: "both",
    "& > *": {
      margin: theme.spacing(1),
      float: "right",
    },
  },
}));

export default function AddButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(1);
    setOpen(false);
  };

  if (!open) {
    return (
      <>
        <IconButton className={classes.iconButton} onClick={handleOpen}>
          <Icon className={classes.icon}>add_circle</Icon>
        </IconButton>
      </>
    );
  } else {
    return (
      <>
        <ModalControl state={open} handleClose={handleClose} />
      </>
    );
  }
}

/* <Modal
        open={open}
      >
        <div className={classes.paper}>
          <Typography className={classes.title} variant="h5">
            ADD TODO LIST
          </Typography>
          <FormControlLabel
            className={classes.isPublic}
            control={<Checkbox onClick={handlePublic} />}
            checked={isPublic}
            label="Public"
          />

          <form className={classes.input} noValidate autoComplete="off">
            <TextField required label="Title" onChange={handleTitle} />
            {textFieldBody.map((field) => field)}
          </form>
          <IconButton className={classes.addButton} onClick={handleAdd}>
            <AddIcon />
          </IconButton>

          <form className={classes.buttonGroup}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              확인
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              취소
            </Button>
          </form>
        </div>
      </Modal> */
