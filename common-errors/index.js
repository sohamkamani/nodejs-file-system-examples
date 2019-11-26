const fs = require('fs')

fs.readFile('./does-not-exist.txt', (err, data) => {
	console.error('./does-not-exist.txt: ', err.code)
})

fs.readFile('./tmp', (err, data) => {
	console.error('./tmp: ', err.code)
})

fs.opendir('./index.js', (err, dir) => {
	console.error('index.js :', err.code)
})

fs.writeFile('restricted.txt', 'sample data', (err) => {
	console.error('restricted.txt: ', err.code)
})