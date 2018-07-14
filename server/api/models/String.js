const mongoose = require('mongoose');

const stringSchema = mongoose.Schema({
  text: String,
  posted: Date,
});

module.exports = stringSchema;
