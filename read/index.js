const fs = require('fs')

// fs.readFile takes the file path and the callback
fs.readFile('README.md', (err, data) => {

	// if there's an error, log it and return
	if (err) {
		console.error(err)
		return
	}

	// Print the string representation of the data
	console.log(data.toString())
})