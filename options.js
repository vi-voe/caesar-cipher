const { program } = require('commander');
program.version('0.0.1');

program
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input <path>', 'an input file', 'null')
  .option('-o, --output <path>', 'an output file', 'null')
  .requiredOption('-a, --action <type>', 'an action encode/decode', 'encode', 'decode')
  .parse();

module.exports = program.opts();	