import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Stack,
  Divider
} from '@mui/material';
import PokeCard from './PokeCard';

const maxPokemon = 107;

function randomIdx(array) {
  // const randIndex = Math.floor(Math.random() * array.length);
  // return array.splice(randIndex, 1).id;
  return Math.floor(Math.random() * array.length);
}

function App() {
  const [pokemonList, setData] = useState({});
  const [eliminated, setEliminated] = useState([]);
  const [pokemon1, setFirstPoke] = useState(null);
  const [pokemon2, setSecondPoke] = useState(null);
  const [top10, setTop10] = useState([]);

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

  useEffect(() => {
    console.log(pokemonList.length);
    if (pokemonList.length < 11 && pokemonList.length > 1) {
      const newTop = top10;
      setTop10(newTop.concat(pokemonList[0].sprite));
    }
  }, [eliminated]);

  const handleClick = (e, data) => {
    e.preventDefault();
    const list = pokemonList;
    const elim = eliminated;
    if (data === pokemon1 && pokemonList.length !== 1) {
      setEliminated(elim.concat(pokemon2));
      list.forEach((pokemon, index) => {
        if (pokemon === pokemon2) {
          list.splice(index, 1);
        }
      });
      setData(list);
    }

    if (data === pokemon2 && pokemonList.length !== 1) {
      setEliminated(elim.concat(pokemon1));
      list.forEach((pokemon, index) => {
        if (pokemon === pokemon1) {
          list.splice(index, 1);
        }
      });
      setData(list);
    }

    const poke1 = randomIdx(list);
    let poke2 = randomIdx(list);

    while (poke1 === poke2 && list.length > 1) {
      poke2 = randomIdx(list);
    }

    setFirstPoke(list[poke1]);
    setSecondPoke(list[poke2]);
  };

  return (
    <div>
      <div className="title">
        <img src="https://fontmeme.com/permalink/220505/76754d52f6629af5b6061defef4863d5.png" alt="pokemon-font" border="0" />
      </div>
      <div className="cards">
        <PokeCard data={pokemon1} handleClick={handleClick} />
        <div className="spacer" />
        <PokeCard data={pokemon2} handleClick={handleClick} />
      </div>
      <h2>Remaining: {pokemonList.length}</h2>
      <div className="top-poke">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png" alt="pokemon-sprite" />
        </Stack>
      </div>
    </div>
  );
}

export default App;
