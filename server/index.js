const express = require('express');
const path = require('path');
const { pool } = require('../db/index');
const routes = require('./routes');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})