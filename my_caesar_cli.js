const { pipeline } = require('stream');

const inputStream = require('./read.js');
const stringTransformStream = require('./transform.js');
const writeStream = require('./write.js');

pipeline (
  inputStream,
  stringTransformStream,
  writeStream,
  (err) => {
    if (err) {
      console.error('failed', err);
    } else {
      console.log('completed');
    }
  }
)

