const { Transform } = require('stream');
const decodedStr = require('./decoder.js');

const stringTransform = new Transform;

stringTransform._transform = (chunk, encoding, callback) => {
  const res = decodedStr(''+chunk);
  callback(null, res);
};

module.exports = stringTransform;