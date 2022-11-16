const { Router } = require('express');
const colors = require('../middleware/colors');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
// const red = require('../middleware/red')

// what middleware does this route need to pass?
module.exports = Router().get('/purple', [red, blue], (req, res) => {
  res.json(req.colors);
});
