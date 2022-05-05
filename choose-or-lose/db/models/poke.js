const mongoose = require('mongoose');

const PokeSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  sprite: String,
  type1: String,
  type2: String
});

const Pokemon = mongoose.model('Pokemon', PokeSchema);

module.exports = Pokemon;
