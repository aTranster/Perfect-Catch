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
  CardActionArea
} from '@mui/material';
// import { CardActionArea } from '@mui/material';
// import { css, styled } from '@mui/system';

const getBgByType = {
  bug: 'forest',
  dark: 'city',
  dragon: 'space',
  electric: 'thunderplains',
  fairy: 'space',
  fighting: 'city',
  fire: 'volcanocave',
  flying: 'mountain',
  ghost: 'earthycave',
  grass: 'meadow',
  ground: 'mountain',
  ice: 'icecave',
  normal: 'route',
  poison: 'earthycave',
  psychic: 'spl',
  rock: 'mountain',
  steel: 'mountain',
  water: 'river'
};

// const PokeCard = (
//   <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//versions/generation-v/black-white/animated/3.gif"
//           alt="pokemon"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
// )

export default function PokeCard() {
  const [pokeInfo, setPokeInfo] = useState(null);
  const [background, setBackground] = useState('bg');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then((res) => {
        setPokeInfo(res.data);
        setBackground(getBgByType[res.data.types[0].type.name]);
      });
  }, []);

  return (
    <Card sx={{ maxWidth: '40vw', maxHeight: 'auto', borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{
            // height: '100%',
            backgroundImage: `url(backgrounds/bg-${background}.png)`
          }}
          image={pokeInfo ? pokeInfo.sprites.versions['generation-v']['black-white'].animated.front_default : null}
          alt="pokemon sprite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokeInfo ? pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1) : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
