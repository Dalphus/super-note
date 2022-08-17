const express = require('express');
// import path from 'path';
require('dotenv').config();

const { getNotes, getTestData } = require('../database/controllers');

const app = express();
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/notes', (req, res) => {
  getNotes()
    .then((data) => {
      res.status(200);
      res.send(data);
    })
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})
