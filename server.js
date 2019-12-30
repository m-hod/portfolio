const express = require('express')
const path = require('path')

const router = require('./routes')

const server = express()

server.use(express.static(path.join(__dirname, 'build')))
server.use('/', router)

module.exports = server