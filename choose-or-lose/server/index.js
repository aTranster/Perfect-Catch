const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  console.log(req);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
