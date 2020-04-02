import React from 'react';
import DrinkForm from "./components/DrinkForm";
import Drinks from "./components/Drinks";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our VirtualBar!</h1>
        <h2>You look thirsty..<br></br> What can we do you for?</h2>
        <DrinkForm />
      </header>
      <div className="drinklist">
        <Drinks />
      </div>
    </div>
  );
}

export default App;
