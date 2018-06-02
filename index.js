
'use strict'; 

const fileReader = require('./lib/reader.js');

let path = [`${__dirname}/data/file1.txt`];

fileReader(path, (err, data) => {
  console.log(err);
});