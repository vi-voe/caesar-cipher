const options = require('./options.js');
const fs = require('fs');
module.exports = (options.input !== 'null') ? fs.createReadStream(options.input) : process.stdin;