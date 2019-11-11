// const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const com = data.toString().trim();
  if (com === 'pwd') {
    pwd();
  } else if (com === 'ls') {
    ls();
  } else if (com.startsWith('cat')) {
    const fileName = `./${com.slice(4)}`;
    cat(fileName);
  } else {
    process.stdout.write('You typed: ' + com);
    process.stdout.write('\nprompt > ');
  }
});
