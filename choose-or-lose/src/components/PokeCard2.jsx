import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  CardActionArea
} from '@mui/material';
// import { CardActionArea } from '@mui/material';
// import { css, styled } from '@mui/system';

const getBgByType = {
  bug: ['forest', 'DarkGreen'],
  dark: ['city', 'black'],
  dragon: ['space', 'cornflowerblue'],
  electric: ['thunderplains', 'yellow'],
  fairy: ['space', 'pink'],
  fighting: ['city', 'orange'],
  fire: ['volcanocave', 'red'],
  flying: ['mountain', 'lightskyblue'],
  ghost: ['earthycave', 'darkslateblue'],
  grass: ['meadow', 'green'],
  ground: ['mountain', 'darkgoldenrod'],
  ice: ['icecave', 'darkturquoise'],
  normal: ['route', 'darkgray'],
  poison: ['earthycave', 'darkmagenta'],
  psychic: ['spl', 'hotpink'],
  rock: ['mountain', 'goldenrod'],
  steel: ['mountain', 'lightslategrey'],
  water: ['river', 'blue']
};

export default function PokeCard() {
  const [pokeInfo, setPokeInfo] = useState(null);
  const [background, setBackground] = useState('bg');
  const [type, setType] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then((res) => {
        setPokeInfo(res.data);
        setBackground(getBgByType[res.data.types[0].type.name]);
        setType({
          type1: res.data.types[0].type.name,
          type2: res.data.types[1].type.name
        });
      });
  }, []);

  return (
    <Card sx={{ maxWidth: '20vw', height: 'auto', borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{
            // height: 'auto',
            backgroundImage: `url(backgrounds/bg-${background[0]}.png)`,
            imageRendering: 'pixelated'
          }}
          image={pokeInfo ? pokeInfo.sprites.versions['generation-v']['black-white'].animated.front_default : null}
          alt="pokemon sprite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokeInfo ? pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1) : null}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              style={{
                backgroundColor: type ? getBgByType[type.type1][1] : null,
                color: 'white'
              }}
              label={type ? type.type1 : ''}
              size="small"
            />
            <Chip
              style={{
                backgroundColor: type ? getBgByType[type.type2][1] : null,
                color: 'white'
              }}
              label={type ? type.type2 : ''}
              size="small"
            />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
