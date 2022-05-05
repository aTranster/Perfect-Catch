const express = require('express');
// const axios = require('axios');
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

app.listen(port, () => {
  console.log('Listening on port', port);
});
