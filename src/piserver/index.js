const http = require('http');
const express = require('express');

const fs = require('fs');
/**
 * Download the file with a billion digits of pi from
 * https://stuff.mit.edu/afs/sipb/contrib/pi/
 *
 * To test: last digits of pi-billion.txt are '5275045519'
 */

// const buffer = new SharedArrayBuffer(1000000002);
// const view = new Int8Array(buffer);

// file = fs.open('../digits/pi-billion.txt', 'r')

// const stream = fs.createReadStream('../digits/pi-billion.txt');

const app = express();
app.listen(3000, () => {
  console.log('Listening at port 3000');
});

fs.readFile('../digits/pi-billion.txt', (error, buffer) => {
  console.log('Billion digits of pi loaded');
  // buffer is a binary array, not a string.

  const searchItUp = (str) => {
    const R = 50;
    const i = buffer.indexOf(str);
    if (i < 0) {
      return { found: false, str: str };
    }

    const nbh = buffer
      .slice(Math.max(i - R, 0), Math.min(i + str.length + R, buffer.length))
      .toString();
    const prev = buffer
      .slice(Math.max(i - R, 0), i)
      .toString()
      .padStart(R, ' ');
    const post = buffer
      .slice(i + str.length, Math.min(i + str.length + R, buffer.length))
      .toString()
      .padEnd(R, ' ');

    return {
      found: true,
      str: str,
      index: (i - 1).toString(),
      neighborhood: nbh,
      prev: prev,
      post: post,
    }; // keep in mind that the file starts with '3.'
  };

  app.get('/search/:digits', (request, response) => {
    response.type('json');
    response.set('Access-Control-Allow-Origin', '*');
    const location = searchItUp(request.params.digits);
    // console.log(location);
    response.send(location);
  });
});
