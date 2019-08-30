import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import HelloWorld from './Components/HelloWorld';
//import Bomb from './Components/Bomb';
import RouletteGun from './Components/RouletteGun';

function App() {
  return (
    <div className="App">
      <RouletteGun bulletInChamber={8} />
    </div>
  );
}

export default App;
