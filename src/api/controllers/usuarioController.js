const usuarioService = require("../service/usuarioService");

module.exports = {
    save: (req, res) => {
        usuarioService
            .save(req.body)
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
        
    },
    update: (req, res) => {
        const { id } = req.params
        usuarioService
            .update( req.body, id )
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
    },
    remove: (req, res) => {
        usuarioService
            .destroy( req.params.id )
            .then( response =>{
                res.json( response )
            }).catch( e =>{
                res.json( {msg: 'Error'} )
            })
    },
    findByPK: (req, res) => {
        return usuarioService
                .findByPK( req.params.id )
                .then( response =>{
                    res.json( response )
                }).catch( e =>{
                    res.json( {msg: 'Error'} )
                })
    },
    findAll: (req, res) => {
        return usuarioService
                .findAll(  )
                .then( response =>{
                    res.json( response )
                }).catch( e =>{
                    console.log(e);
                    res.json( {msg: e.message} )
                })
    }
    
}