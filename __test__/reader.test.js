'use strict';

jest.mock('fs');

const reader = require('../lib/reader.js');

describe('File Reader Module', () => {
  
  it('When given a bad file, returns an error', () => {
    let path = `${__dirname}/../../data/bad.txt`;
    reader(path, (err, data) => {
      expect(err).toBeDefined();
    });
  });

  
  it('When given an array of at least one invalid File paths, returns an error', () => {
    let path = [`${__dirname}/../../data/bad.txt`, `${__dirname}/../../data/good.txt`, `${__dirname}/../../data/bad.txt`];
    reader(path, (err) => {
      expect(err).toBeDefined();
    });
  });

  it('When given an array of valid File paths, returns an array of strings that contain text of each file', () => {
    let path = [`${__dirname}/../../data/fine.txt`, `${__dirname}/../../data/good.txt`, `${__dirname}/../../data/okay.txt`, `${__dirname}/../../data/okay.txt`, `${__dirname}/../../data/okay.txt`, `${__dirname}/../../data/okay.txt` ];
    reader(path, (err, data) => {
      expect(data).toEqual(['File Contents', 'File Contents', 'File Contents', 'File Contents', 'File Contents', 'File Contents']);
    });
  });


});