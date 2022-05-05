import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

function App() {
  const [pokeData, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/pokemon')
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      });
  }, []);

  return (
    <div className="cards">
      <PokeCard data={pokeData[0]} />
    </div>
  );
}

export default App;
