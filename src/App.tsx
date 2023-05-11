import { useEffect, useState } from 'react';
import './App.css';
import { Puppies } from './components/Puppies';
import { PuppiesContext } from './PuppiesContext';
import { fetchAllPuppies } from './components/tools';
import { Puppy } from './components/types';

function App() {
  const [puppies, setPuppies] = useState([] as Puppy[]);

  useEffect(() => {
    fetchAllPuppies() 
    .then((newPuppies) => setPuppies(newPuppies))
    .catch((error) => console.log(error));
  }, []);

  return (
    <PuppiesContext.Provider value={{ puppies, setPuppies }}>
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Fengs Puppies Site</h2>
      </header>
      <Puppies />
    </div>
    </PuppiesContext.Provider>

  );
}

export default App;
