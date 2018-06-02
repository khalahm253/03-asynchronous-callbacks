![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Asynchronous Callbacks
===


Travis Link :

The reader module takes an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data is in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

## Resources
* [fs module docs](https://nodejs.org/api/fs.html)


## Testing
##### File Reader Module Tests
* Use `describe` and `it` (or `test`) methods to define descriptive tests and increase readability
* Each `it` callback should aim to test a small, well defined, feature of a function
* Write tests to ensure that the reader function rejects errors with invalid file paths
* Write tests to ensure that the reader function correctly resolves mapped string data for an array of file paths


