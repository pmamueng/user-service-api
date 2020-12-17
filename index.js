const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	  res.json([
	  	{
		  name: 'Ping',
		  email: 'ping.mamueng@goilluminate.com'
		},
		{
		  name: 'Ping2',
		  email: 'ping.mamueng@goillumiante.com'
		}]
	  )
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
