const fs = require('fs')

fs.chmod('README.md', 0o664, (err) => {
	if (err) {
		console.error(err)
	}

	console.log('Permissions changed successfully');
})