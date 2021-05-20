import  { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
        margin: theme.spacing(3, 0, 2),
      },
  }));
  




export default function Offer({handleClose}) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [Go_to, setGo_to] = useState();
  const [Back_to, setBack_to] = useState();

  const Axios_function = () => {
        
    var json_details={
       go_to_date: Go_to,
      backs_to_date: Back_to,
   };
console.log(json_details)
   
       axios.post('http://13.94.65.220/offer', json_details)
       .then( res => {
           console.log(res)})
       .catch(error => {
          console.error('There was an error!', error);
        });
   };




  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
      <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="זמן הגעה למרפאה "
        type="datetime-local"
        defaultValue=""
        onChange={(event) => {setGo_to(event.target.value)}} //whenever the text field change, you save the value in state

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>


    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="זמן הגעה לבסיס "
        type="datetime-local"
        defaultValue=""
        onChange={(event) => {setBack_to(event.target.value)}} //whenever the text field change, you save the value in state
        width="800px"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>


    <Grid item>
    <Button
    variant="contained"
    color="primary"
    className={classes.button}
    // endIcon={<Icon>send</Icon>}
    onClick={handleClose}  
    
    >
        שלח
      </Button>
    
          </Grid>
        
      </Grid>
    </MuiPickersUtilsProvider>
  );
}