const Sequelize = require('sequelize')
const dbConfig  = require('../config/database')

const connection = new Sequelize( dbConfig )

const tipoUsuarioModel = require( '../models/tipoUsuarioModel' )
const usuarioModel = require( '../models/usuarioModel' )
const associate = require( '../models/associate' )

tipoUsuarioModel.init( connection )
usuarioModel.init( connection )
associate.associate( usuarioModel, tipoUsuarioModel, 'tipo_usuario_id', 'tipo_usuario' )


module.exports = connection