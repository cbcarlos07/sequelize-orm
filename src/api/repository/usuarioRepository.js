
const Sequelize = require('sequelize')
const usuarioModel = require( '../../config/db/models/usuarioModel' )
module.exports = {
    create: obj => {
        return usuarioModel.create( obj )
    },
    update: (obj, id) => {        
        return usuarioModel.update( obj, {where: {id}} )
    },
    destroy: id => {
        return usuarioModel.destroy( { where: {id} } )
    },
    findByPK: id => {
        return usuarioModel.findByPk( id )
    },
    findAll: () => {
        return usuarioModel.findAll()
    }
}