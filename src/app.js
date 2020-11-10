const express = require('express')
const routesConfig = require('./routes')
const bodyParser = require('body-parser')
const server = express()

require( './config/db/database' )

server.use(bodyParser.json());
server.use(bodyParser.urlencoded( { extended:false } ));

routesConfig(server)

 
module.exports = server