import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Introduction from './Components/Introduction';
import Education from './Components/Education';
import Experience from './Components/Experience';

import Buttons from './Components/Buttons';

function App() {
  return (
    <div className='background'>
      <div className='parent'>
        <div className='child'>
          <Introduction/>
        </div>
        <div className='child'>
          <Buttons/>
        </div>
      </div>
    </div>
  );
}
// fix
export default App;
