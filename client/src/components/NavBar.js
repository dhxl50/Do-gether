import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1    
  },
  bar:{
    backgroundColor:"rgba(0,0,0,0.8)"
  },
  title: {
    marginLeft:"9%",
    flexGrow: 1,
  },
  logout:{
    marginRight:"9%",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Do-gether
          </Typography>
          <Button color="inherit" className={classes.logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}