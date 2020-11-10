const tipoUsuarioRepository = require('../repository/tipoUsuarioRepository')

module.exports = {
    save: obj => {
        return tipoUsuarioRepository.create( obj )
    },
    update: (obj, id) => {
        return tipoUsuarioRepository.update( obj, id )
    },
    destroy: id => {
        return tipoUsuarioRepository.destroy( id )
    },
    findByPK: id => {
        return tipoUsuarioRepository.findByPK( id )
    },
    findAll: () => {
        return tipoUsuarioRepository.findAll(  )
    },
    testConnection: () =>{
        return tipoUsuarioRepository.testConnection()
    }
}