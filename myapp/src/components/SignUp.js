import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  { useState } from 'react';
import axios from 'axios';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
    const [Person_FisrtName,setFirstName]=useState("");
    const [Person_LastName,setLastName]=useState("");
    const [Person_Email,setEmail]=useState("");
    const [Person_Password,setPassword]=useState("");
    const [Person_Unit,setUnit]=useState("");
    const [Person_Idfid,setIdf_id]=useState("");

    

  const classes = useStyles();

    const Axios_function = () => {
        
     var json_details={
        firstName: Person_FisrtName,
        LastName: Person_LastName,
        Email: Person_Email,
        Password: Person_Password,
        Unit: Person_Unit,
        ID: Person_Idfid,
    };

    
        axios.post('http://13.94.65.220/register', {
            "firstname": "a",
            "lastname": "a",
            "email": "a",
            "unit": "a",
            "password": "a",
            "idf_id": 1 })
        .then( res => {
            console.log(res)})
        .catch(error => {
            console.error('There was an error!', error);
        });
    };






  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(event) => {setFirstName(event.target.value)}} //whenever the text field change, you save the value in state
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(event) => {setLastName(event.target.value)}} //whenever the text field change, you save the value in state

              />

              
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => {setEmail(event.target.value)}} //whenever the text field change, you save the value in state

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => {setPassword(event.target.value)}} //whenever the text field change, you save the value in state

              />
              
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="Unit"
                label="Unit"
                type="Unit"
                id="Unit"
                autoComplete="current-Unit"
                onChange={(event) => {setUnit(event.target.value)}} //whenever the text field change, you save the value in state

              />
            </Grid>
          </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="idf_id"
                label="idf_id"
                type="idf_id"
                id="idf_id"
                autoComplete="current-idf_id"
                onChange={(event) => {setIdf_id(event.target.value)}} //whenever the text field change, you save the value in state

              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { Axios_function() }}          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <h1>{Person_FisrtName}</h1>
    </Container>


  );


}
