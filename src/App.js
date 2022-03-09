import React from 'react';
import imageDog from './images/maltese.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My New React App Bro!</h1>
      <h2>Author: Nikita Izmailov</h2>
      <img src={imageDog} alt="dog"/>
    </div>
  );
}

export default App;
