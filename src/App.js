import React, { useState } from 'react';
import './App.css';

// Component imports
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';


function App() {

  const [sessionToken, setSessionToken] = useState('s');

  const viewConductor = () => {
    return sessionToken !== undefined ? <Home token={sessionToken} /> : <Auth setSession={setSessionToken} />
  }

  return (
    <div>
      {viewConductor()}
      {/* <img src="https://drive.google.com/uc?export=view&id=0BwD3Iu6JiH1fNzloQ1pNZzhwZWc"/> */}
      {/* <iframe src="https://drive.google.com/file/d/0BwD3Iu6JiH1fNzloQ1pNZzhwZWc/preview" width="640" height="480"></iframe> */}
      </div>
  );
}

export default App;

