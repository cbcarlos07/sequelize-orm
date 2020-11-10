const usuarioRepository = require('../repository/usuarioRepository')

module.exports = {
    save: obj => {
        return usuarioRepository.create( obj )
    },
    update: (obj, id) => {
        return usuarioRepository.update( obj, id )
    },
    destroy: id => {
        return usuarioRepository.destroy( id )
    },
    findByPK: id => {
        return usuarioRepository.findByPK( id )
    },
    findAll: () => {
        return usuarioRepository.findAll(  )
    },
    testConnection: () =>{
        return usuarioRepository.testConnection()
    }
}