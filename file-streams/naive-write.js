const fs = require('fs')

class SineWave {
	constructor() {
		this.current = 0.1
	}

	next() {
		const val = Math.sin(this.current)
		this.current += 0.1
		return val
	}
}

const f = new SineWave()
let fibbStr = ''

for (let i = 0; i < 10000000; i++) {
	const n = f.next()
	fibbStr += String(n) + '\n'
}

fs.writeFile('fibbonacci.txt', fibbStr, err => {
	if (err) {
		console.error(err)
	}
	const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
	console.log('the program used', memoryUsedMb, 'MB')
})