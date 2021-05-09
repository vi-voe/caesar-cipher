const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
const alphabetLength = alphabet.length;

const options = require('./options.js');
const dir = (options.action == 'encode') ? 1 : 0; 
const step = options.shift;

function findNextPosition(current, step, dir) {
  const stepPure = step % alphabetLength;
  let nextPos = (dir) ? current + stepPure : current - stepPure;
  if (dir && nextPos >= alphabetLength) {
    nextPos = nextPos - alphabetLength;
  } else if (dir && nextPos < 0) {
    nextPos = alphabetLength + nextPos;
  }

  if (!dir && nextPos < 0) {
    nextPos = alphabetLength + nextPos;
  } else if (!dir && nextPos  >= alphabetLength) {
    nextPos = nextPos - alphabetLength;
  }

  return nextPos;
}

module.exports = function decodedStr(str) {
  return str.split('').map(letter => {
    const index = alphabet.indexOf(letter);
    return (index > -1) ? alphabet.charAt(findNextPosition(index, step*2, dir)) : letter;
  }).join('');
}


