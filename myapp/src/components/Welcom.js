import Popup from'./Popup';
import { useState } from 'react';
import './Welcom.css';
import Offer from './Offer';
import GetService from './GetService';

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
        <button className="Button1" onClick={() => setButtonPopup1(true)}> Going to pharmacy </button>
        <br></br>
        <button className="Button2" onClick={() => setButtonPopup2(true)}> Need medicine </button>
        
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