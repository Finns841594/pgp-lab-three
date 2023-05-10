import React from 'react';
import './App.css';
import { PuppyCard } from './components/PuppyCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Fengs Puppies Site</h2>
      </header>
      <PuppyCard />
    </div>
  );
}

export default App;
