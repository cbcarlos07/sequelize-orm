const tipoUsuarioModel = require( '../../config/db/models/tipoUsuarioModel' )
module.exports = {
    create: obj => {
        return tipoUsuarioModel.create( obj )
    },
    update: (obj, id) => {
        return tipoUsuarioModel.update( obj, {where: {id}} )
    },
    destroy: id => {
        return tipoUsuarioModel.destroy( { where: {id} } )
    },
    findByPK: id => {
        return tipoUsuarioModel.findByPk( id )
    },
    findAll: () => {
        return tipoUsuarioModel.findAll(  )
    },
    testConnection: () =>{
        return tipoUsuarioModel.sequelize.query( 'SELECT 1' )
    }
}