const mongoose = require('mongoose');
const Pokemon = require('./models/poke');

mongoose.connect('mongodb://localhost/poke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;
