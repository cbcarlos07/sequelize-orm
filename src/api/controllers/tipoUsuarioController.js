const tipoUsuarioService = require("../service/tipoUsuarioService");

module.exports = {
    save: (req, res) => {
        tipoUsuarioService
            .save(req.body)
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
        
    },
    update: (req, res) => {
        const { id } = req.params
        tipoUsuarioService
            .update( req.body, id )
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
    },
    remove: (req, res) => {
        tipoUsuarioService
            .destroy( req.params.id )
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
    },
    findByPK: (req, res) => {
        return tipoUsuarioService
                .findByPK( req.params.id )
                .then( response =>{
                    res.json( response )
                }).catch( e =>{
                    res.json( {msg: 'Error'} )
                })
    },
    findAll: (req, res) => {
        return tipoUsuarioService
                .findAll(  )
                .then( response =>{
                    res.json( response )
                }).catch( e =>{
                    res.json( {msg: 'Error'} )
                })
    }
    
}