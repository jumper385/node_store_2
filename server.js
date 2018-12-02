const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const db = 'mongodb://localhost:27017/store'

app.use(bodyParser.json())

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(console.log(`connected to mongodb database...`))
    .catch(err => console.log(err))

app.listen(3000,() => {console.log(`Server Started`)})