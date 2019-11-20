const fs = require('fs')

// The writeFileSync API takes the location of the file
// and the contents to be written to it
fs.writeFileSync('README.md', 'Hello Sync API!')

// The readFileSync API reads the file and returns a
// Buffer, whose `toString` method gives the string
// representation of the file
console.log(fs.readFileSync('README.md').toString())