const mongoose = require('mongoose');
const StringModel = mongoose.model('String');

const addString = str => {
  const { text, posted } = str;
  const newStr = new StringModel({
    text,
    posted,
  });
  return newStr.save();
};

const getAllStrings = () => StringModel.find({});

module.exports = {
  addString,
  getAllStrings,
};
