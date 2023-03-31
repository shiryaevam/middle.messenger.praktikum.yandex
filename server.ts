// server.ts
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('./build/'))
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.get('*', (_, res) => {
	res.sendfile(path.join(__dirname, 'build/index.html'))
})

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})
