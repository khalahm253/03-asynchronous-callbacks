'use strict';

const fs = require('fs');

module.exports = exports = (path, callback) => {
  let type = typeof path;
  let dataArray = [];

  if (type === 'object' && path.length) {
    for (let i = 0; i < path.length; i ++ ) {
      fs.readFile(path[i], (error, data) => {
        if (error) {
          callback(error);
    
        }
        else {
          dataArray.push(data.toString().trim());
        }
      });
    }
    callback(null, dataArray);
  } else {
    fs.readFile(path, (err, data) => {
      if (err) { callback(err); }
      else { callback(undefined, data.toString().trim()); }
    });
  }
};