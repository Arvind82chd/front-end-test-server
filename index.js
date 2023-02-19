const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Testing Success!!")
})

const port = 3000
app.listen(port, (req, res) => {
    console.log(`Application listening at Port: ${port}`)
})