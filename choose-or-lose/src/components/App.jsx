import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Stack,
  Divider
} from '@mui/material';
import PokeCard from './PokeCard';

const substitute = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/substitute.png';

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
        setData(result.data);
        setFirstPoke(result.data[randomIdx(result.data)]);
        setSecondPoke(result.data[randomIdx(result.data)]);
      });
  }, []);

  useEffect(() => {
    if (pokemonList.length < 10 && pokemonList.length > 1) {
      const newTop = top10;
      setTop10(newTop.concat(eliminated[eliminated.length - 1].sprite));
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
      {pokemonList.length > 1
        ? <h3 className="header">Pick your favorite of two pokemon until only one is left!</h3>
        : <h3 className="header">We've found your perfect match!!</h3>}
      <div className="cards">
        <PokeCard data={pokemon1} handleClick={handleClick} />
        <div className="spacer" />
        <PokeCard data={pokemon2} handleClick={handleClick} />
      </div>
      <h3 className="remaining">
        Remaining:
        {' '}
        {`${pokemonList.length} `}
        / 107
      </h3>
      <div className="top-poke">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <img src={pokemonList.length < 2 ? eliminated[eliminated.length - 1].sprite : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 7 ? top10[7] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 6 ? top10[6] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 5 ? top10[5] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 4 ? top10[4] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 3 ? top10[3] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 2 ? top10[2] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 1 ? top10[1] : substitute} alt="pokemon-sprite" />
          <img src={top10.length > 0 ? top10[0] : substitute} alt="pokemon-sprite" />
        </Stack>
      </div>
      <h3 className="top-poke">Top 2-9</h3>
    </div>
  );
}

export default App;
