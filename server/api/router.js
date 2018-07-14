const express = require('express');
const api = require('./index.js');
const router = express.Router();

// define route to retrieve all strings from db
router.get('/strings', (req, res) => {
  api
    .getAllStrings()
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
// define route to add string to db
router.post('/strings', (req, res) => {
  api
    .addString(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.sendStatus(500).send(e);
    });
});

module.exports = router;
