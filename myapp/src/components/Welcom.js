import Popup from'./Popup';
import { useState } from 'react';
import './Welcom.css';
import Offer from './Offer';
import GetService from './GetService';
import { Grid } from '@material-ui/core';

function Welcom() {
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);

  const handleClose = () => {
    setButtonPopup1(false)
  }
  return (
    
    <div className="Welcom">
      <main>
        <h1 className='header'></h1>
        <br></br>
<Grid xs={3}>
        <button className="Button1" onClick={() => setButtonPopup1(true)}> מציע שירות</button>
        <br></br>
        </Grid>
        <Grid xs={9}>        </Grid>


        <Grid  xs={3}>

        <button className="Button2" onClick={() => setButtonPopup2(true)}> מקבל שירות </button>
        </Grid>
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
          <Offer handleClose={handleClose}/>
          
        </Popup>
        
        <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
          <GetService handleClose={handleClose}/>
          
        </Popup>

       

      </main>
    </div>
  );
}

export default Welcom;