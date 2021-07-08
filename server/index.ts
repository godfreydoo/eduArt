export {};
const express = require('express');
const path = require('path');
const compression = require('compression');
const routes = require('./routes');
const db = require('../db/index.ts');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression({level: 1}));
app.use(express.json());
app.use('/api', routes);

app.get('/*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err: any) => {
    if (err) {
      res.status(500).send(err);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})