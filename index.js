const express = require('express')
const app = express()

//Setting up view engine ejs
app.set('view engine', 'ejs')

//Defining endpoints
app.get('/', (req, res) => {
    res.render('testSample')
})

const port = 3000
app.listen(port, (req, res) => {
    console.log(`Application listening at Port: ${port}`)
})