// server.ts
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
console.log()
app.use(express.static('./build/'))
app.get('*', (_, res) => {
	res.sendfile(path.join(__dirname, 'build/index.html'))
})

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})
