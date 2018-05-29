'use strict';

const fs = require('fs');
const fileReader = require('./lib/reader.js');

let dir = `${__dirname}/data/`;

function readFiles(paths, callback) {
  fs.readdir(paths, (err, filenames) => {
    if ( err ) { throw err; }
    
    filenames.forEach(filename => {
      let path = dir + filename;
      console.log(path);
      fileReader(path, callback);
    });
  });
}

var data = [];
readFiles(dir, (err, content) => {
  if(err) { throw err; }
  data.push(content);
  console.log(data);
});