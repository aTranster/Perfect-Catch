import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

function App() {
  const [pokeData, setData] = useState({});
  const [pokemon1, setfirstPoke] = useState({});
  const [pokemon2, setSecondPoke] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/pokemon')
      .then((result) => {
        setData(result.data);
      });
  }, []);

  return (
    <div className="cards">
      <PokeCard data={pokeData[0]} />
      <PokeCard data={pokeData[1]} />
    </div>
  );
}

export default App;
