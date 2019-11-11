const fs = require('fs');
const cat = fileName => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });

  process.stdout.write('prompt > ');
};
module.exports = cat;
