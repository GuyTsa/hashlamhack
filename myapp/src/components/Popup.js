import React from 'react'
import './Popup.css'
import { makeStyles } from '@material-ui/core/styles';

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
      },
  }));


function Popup(props) {

    const classes = useStyles();

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            
                { props.children }
            </div>
        </div>
    ) : "";
}
export default Popup