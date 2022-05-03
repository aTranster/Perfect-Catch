import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { css, styled } from '@mui/system';

const getBgByType = {
  bug: ['forest'],
  dark: ['city'],
  dragon: ['space'],
  electric: ['thunderplains'],
  fairy: ['space'],
  fighting: ['city', 'meadow'],
  fire: ['volcanocave', 'desert'],
  flying: ['mountain', 'route'],
  ghost: ['earthycave'],
  grass: ['meadow'],
  ground: ['mountain', 'earthycave', 'route'],
  ice: ['icecave'],
  normal: ['route', 'city'],
  poison: ['earthycave'],
  psychic: ['city', 'spl'],
  rock: ['mountain', 'earthycave'],
  steel: ['mountain'],
  water: ['beach', 'beachshore', 'river', 'deepsea'],
};

// const PokeCard = styled(Card)`
//   height: 100%;
//   border-radius: 1.5em;
//   overflow: hidden;
//   box-shadow: 2px 4px 4px -2px #000;
//   transform: translateZ(0);
//   background-color: transparent;
//   background-position: center;
//   background-repeat: no-repeat;
//   image-rendering: -moz-crisp-edges;
//   image-rendering: crisp-edges;
//   image-rendering: pixelated;
// `;

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

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          style={{
            height: '100%',
            backgroundImage: `url(${'backgrounds/bg-beach.png'})`
          }}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//versions/generation-v/black-white/animated/3.gif"
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
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
