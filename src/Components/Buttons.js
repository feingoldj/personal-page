import React from "react";
import Button from 'react-bootstrap/Button'
import Pdf from '../Jared_Feingold_Resume.pdf'

import './Buttons.css'

export default Buttons;

function Buttons() {
    return <div className='outer-container'>
        <button className='button linkedin' onClick={() => {
      window.open(
        "http://www.linkedin.com/in/jfeingo2",
        '_blank' // <- opens the link in a new tab or window.
      );
    }} ></button>
        <button className='button cv'>
            <a className='a' href = {Pdf} target = "_blank">CV</a>
        </button>
        
    </div>;

}