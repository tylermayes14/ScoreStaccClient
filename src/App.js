import React, { useState, useEffect } from 'react';
import './App.css';

// Component imports
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  const viewConductor = () => {
    return sessionToken !== undefined ? <Home token={sessionToken} /> : <Auth setSession={setSessionToken} />
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  
  return (
    <div>
      {viewConductor()}
      <button onClick={clearToken}>Logout</button>
      </div>
  );
}

export default App;

