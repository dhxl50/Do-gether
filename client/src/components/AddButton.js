import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
      float: "right",
    },
  },
}));

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

export default function AddButton() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton className={classes.iconButton} onClick={handleOpen}>
        <Icon className={classes.icon}>add_circle</Icon>
      </IconButton>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h5">ADD TODO LIST</Typography>

          <form className={classes.input} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" />
            <TextField id="standard-basic" label="Todo 1" />
            <TextField id="standard-basic" label="Todo 1" />
          </form>

          <form className={classes.button}>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              확인
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              취소
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
