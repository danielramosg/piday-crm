const http = require('http');
const express = require('express');

const fs = require('fs');
/**
 * Download the file with a billion digits of pi from
 * https://stuff.mit.edu/afs/sipb/contrib/pi/
 */

// const buffer = new SharedArrayBuffer(1000000002);
// const view = new Int8Array(buffer);

// file = fs.open('../digits/pi-billion.txt', 'r')

// const stream = fs.createReadStream('../digits/pi-billion.txt');

const app = express();
app.listen(3000, () => {
  console.log('Listening at port 3000');
});

// app.get('/search/:digits', (request, response) => {
//   console.log(request.params.digits);
//   response.send(request.params.digits);
// });

// fs.readFile('../digits/pi-billion.txt', (error, buffer) => {
//   const i = buffer.indexOf('5275045519');
//   console.log(buffer.slice(buffer.length - 10, buffer.length).toString());
//   console.log(i - 1);
//   console.log(buffer.slice(i - 50, i + 50).toString());
// });

fs.readFile('../digits/pi-billion.txt', (error, buffer) => {
  console.log('Billion digits of pi loaded');
  // buffer is a binary array, not a string.
  app.get('/search/:digits', (request, response) => {
    const i = buffer.indexOf(request.params.digits);
    response.send((i - 1).toString());
  });
});
