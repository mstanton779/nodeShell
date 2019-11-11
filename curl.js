const request = require('request');
const curl = link => {
  request(link, function(error, response, body) {
    console.log('body: ', body);
  });
};
module.exports = curl;
