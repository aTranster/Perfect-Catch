const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('../db/index');
const Pokemon = require('../db/models/poke');

const app = express();
const port = 3001;

app.use(cors());

app.get('/pokemon', (req, res) => {
  Pokemon.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  // request('https://pokeapi.co/api/v2/generation/4', (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   JSON.parse(result.body).pokemon_species.forEach(species => {
  //     Pokemon.create({
  //       id: parseInt(species.url.split('/')[6]),
  //       name: species.name
  //     })
  //   })
  //   res.sendStatus(201);
  // })

  // Pokemon.find({})
  // .then(result => {

  //   result.forEach((poke) => {
  //     request(`https://pokeapi.co/api/v2/pokemon-species/${poke.id}/`)
  //     .then((response) => {
  //       Pokemon.findOneAndUpdate({id: poke.id}, {
  //         description: JSON.parse(response).flavor_text_entries[0].flavor_text
  //       }, (err, result) => {
  //         if (err) {
  //           console.log(err)
  //         }
  //       })

  //       // console.log(JSON.parse(response).flavor_text_entries[0].flavor_text)
  //     })
  //   })
  // })
  // .then(() => res.sendStatus(201));
  // Pokemon.find({})
  //   .then((result) => {
  //     result.forEach((poke) => {
  //       axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.id}/`)
  //         .then((response) => {
  //           Pokemon.findOneAndUpdate({ id: poke.id }, {
  //             // type1: response.data.types[0].type.name,
  //             // type2: response.data.types[1] ? response.data.types[1].type.name : null,
  //             sprite: response.data.sprites.versions['generation-v']['black-white'].animated.front_default
  //           }, (err, result) => {});

  //           // console.log(response.data.types[1] ? response.data.types[1].type.name : null)
  //         });
  //     });
  //   })
  //   .then(() => res.sendStatus(200));

  Pokemon.find({})
    .then((result) => res.send(result));

  // Pokemon.deleteMany({})
  // .then(res.sendStatus(200));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
