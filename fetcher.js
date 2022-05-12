const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = args[0];
const FILEPATH = args[1];

request(URL, (error, response, body) => {
  fs.writeFile(FILEPATH, body, err => {
      if (err) {
        console.log("err: ", err);
      }

      const SIZE = body.length * 8;
      console.log(`Downloaded and saved ${SIZE} bytes to ${FILEPATH}.`)
    });
});

