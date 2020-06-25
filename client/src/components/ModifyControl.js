import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
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
  title: {
    float: "left",
    width: "13rem",
    marginLeft: "0.5rem",
    marginTop: "0.3rem",
    padding: 0,
  },
  isPublic: {
    float: "left",
  },
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "90%",
    maxWidth: 320,
    maxHeight: 500,
    msOverflowStyle: "none",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
  },
  input: {
    "& > *": {
      float: "left",
      margin: theme.spacing(1),
      marginRight: 0,
      width: "14.5rem",
    },
  },
}));

export default function AddButton({ data, handleClose }) {
  const classes = useStyles();
  const [title, setTitle] = useState(data.title);
  //const [date, setDate] = useState(new Date());
  const [isPublic, setIsPublic] = useState(data.isPublic);
  const [textList, setTextList] = useState(data.todo.split(","));
  const [textFieldBody, setTextFieldBody] = useState(
    textList.map((text, idx) => {
      return (
        <TextField
          required
          fullWidth={true}
          defaultValue={textList[idx]}
          label={"To do " + (idx + 1)}
          onChange={(e) => handleText(e, idx)}
        />
      );
    })
  );

  const modifyApi = (data) => {
    return fetch("/api/updatecard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  const checkAndClose = () => {
    if (title === "") {
      alert("Please enter a title!");
    } else if (checkEemptyList(textList)) {
      alert("Please fill in the blank!");
    } else {
      const initCK = Array.apply(null, Array(textList.length)).map(
        Number.prototype.valueOf,
        0
      );
      modifyApi({
        isPublic: isPublic,
        name: localStorage["userName"],
        date: data.date,
        time: data.time,
        title: title,
        todo: textList.join(","),
        ck: initCK.join(","),
      });
      handleClose();
      window.location.reload(false);
    }
  };

  const checkEemptyList = (arr) => {
    if (arr.length === 0) {
      return 1;
    }
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] === undefined || arr[idx] === "") {
        return 1;
      }
    }
    return 0;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePublic = () => {
    setIsPublic(isPublic ? 0 : 1);
  };

  const handleText = (e, idx) => {
    let tempArr = textList;
    tempArr[idx] = e.target.value;
    setTextList(tempArr);
  };

  const handleAdd = () => {
    if (textFieldBody.length < 5) {
      const idx = textFieldBody.length;
      setTextFieldBody([
        ...textFieldBody,
        <TextField
          required
          label={"To do " + (idx + 1)}
          onChange={(e) => handleText(e, idx)}
        />,
      ]);
    } else {
      alert("You can register up to five.");
    }
  };

  return (
    <>
      <Modal open={true}>
        <div className={classes.paper}>
          <Typography className={classes.title} variant="h5">
            MODIFY TODO
          </Typography>
          <FormControlLabel
            className={classes.isPublic}
            control={<Checkbox onClick={handlePublic} />}
            checked={isPublic}
            label="Public"
          />

          <form className={classes.input} noValidate autoComplete="off">
            <TextField required label="Title" onChange={handleTitle} defaultValue={data.title}/>
            {textFieldBody.map((field) => field)}
          </form>
          <IconButton className={classes.addButton} onClick={handleAdd}>
            <AddIcon />
          </IconButton>

          <form className={classes.buttonGroup}>
            <Button variant="contained" color="primary" onClick={checkAndClose}>
              수정
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              삭제
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
