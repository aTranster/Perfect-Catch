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

export default function PokeCard({ data }) {
  return data
    ? (
      <Card sx={{ maxWidth: '20vw', height: 'auto', borderRadius: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{
            // height: 'auto',
              backgroundImage: `url(backgrounds/bg-${getBgByType[data.type1][0]}.png)`,
              imageRendering: 'pixelated'
            }}
            image={data.sprite}
            alt="pokemon sprite"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                style={{
                  backgroundColor: getBgByType[data.type1][1],
                  color: 'white'
                }}
                label={data.type1}
                size="small"
              />
              {data.type2
                ? (
                  <Chip
                    style={{
                      backgroundColor: getBgByType[data.type2][1],
                      color: 'white'
                    }}
                    label={data.type2}
                    size="small"
                  />
                ) : null}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ) : null;
}
