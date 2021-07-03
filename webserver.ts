import User from './user'
import config from "./config";
const http = require('http')
const axios = require('axios')
const express = require('express')
const app = express()


const port = config.port

const usr:User = {
    name:"Rikus",
    age: 33
}

app.get('/helloworld', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(usr))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})