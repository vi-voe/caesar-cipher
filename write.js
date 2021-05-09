const options = require('./options.js');
const fs = require('fs');
module.exports = (options.output !== 'null') ? fs.createWriteStream(options.output) : process.stdout;