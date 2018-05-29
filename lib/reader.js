'use strict';


const fs = require('fs');
// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (path, callback) => {
  
  fs.readFile(path, 'utf-8', (err, content) => {
    if(err) { callback(err); }
    else { callback(undefined, content.toString().trim()); }
  });

}