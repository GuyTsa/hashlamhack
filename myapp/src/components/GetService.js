import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©️ '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
      
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function GetService({handleClose}) {
  const classes = useStyles();

  return (
    <Grid Container >
      <CssBaseline />

        <form className={classes.container} noValidate>
        <TextField
        label="Next appointment"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
             />
               <TextField id="standard-basic" label="Unit" />

         <Grid item>
           <Link to="/All">
          <Button 
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClose}
            >
            Send
          </Button>
              </Link>
          </Grid>
        </form>

      
    </Grid>
  );
}