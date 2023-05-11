import React from 'react';
import './App.css';
import { Puppies } from './components/Puppies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Fengs Puppies Site</h2>
      </header>
      <Puppies />
    </div>
  );
}

export default App;
