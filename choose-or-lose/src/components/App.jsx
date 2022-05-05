import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

const maxPokemon = 107;

function randomIdx(array) {
  // const randIndex = Math.floor(Math.random() * array.length);
  // return array.splice(randIndex, 1).id;
  return Math.floor(Math.random() * array.length);
};

function App() {
  const [pokemonList, setData] = useState({});
  const [eliminated, setEliminated] = useState([]);
  const [pokemon1, setFirstPoke] = useState(null);
  const [pokemon2, setSecondPoke] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/pokemon')
      .then((result) => {
        // const list = {};
        // let randIndex = Math.floor(Math.random() * (max - min) + min);
        // result.data.forEach((pokemon) => {
        //   list[pokemon.id] = pokemon;
        // });
        // setData(list);
        setData(result.data);
        setFirstPoke(result.data[randomIdx(result.data)]);
        setSecondPoke(result.data[randomIdx(result.data)]);
      });
  }, []);

  const handleClick = (e, data) => {
    e.preventDefault();
    const list = pokemonList;
    let elim = eliminated;
    if (data === pokemon1) {
      setEliminated(elim.concat(pokemon2));
      list.forEach((pokemon, index) => {
        if (pokemon === pokemon2) {
          list.splice(index, 1);
        }
      });
      setData(list);
    } else {
      setEliminated(elim.concat(pokemon1));
      list.forEach((pokemon, index) => {
        if (pokemon === pokemon1) {
          list.splice(index, 1);
        }
      });
      setData(list);

      setFirstPoke(list[randomIdx(list)]);
      setSecondPoke(list[randomIdx(list)]);
    }
  };

  return (
    <div className="cards">
      <PokeCard data={pokemon1} handleClick={handleClick} />
      <div className="spacer" />
      <PokeCard data={pokemon2} handleClick={handleClick} />
    </div>
  );
}

export default App;
