'use strict';

module.exports = exports = {};

exports.readFile = (file , cb) => {
  if ( file.match(/bad/i)) {
    callback('Invalid File');
  }
  else {
    callback(undefined, new Buffer('File Contents'));
  }
};