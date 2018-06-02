'use strict';

//TODO: change type to not be typeof object and use instanceof Array

const fs = require('fs');

module.exports = exports = (path, callback) => {
  let type = typeof path;
  let dataArray = [];

  if (type === 'object' && path.length) { // Don't use type of Object for an Array
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
      else { callback(data.toString().trim()); }
    });
  }
};