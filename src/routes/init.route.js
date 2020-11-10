const { Router } = require("express");

const initRoute = Router()

initRoute.route('').get((req, res)=>{
    res.json( {msg: 'API Sequelize'} )
})

module.exports = initRoute