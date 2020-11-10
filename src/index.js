const env = require('./config/environments')
const server = require('./app')
const tipoUsuarioService = require('./api/service/tipoUsuarioService')
const porta = env.SERVER_PORT

tipoUsuarioService
    .testConnection()
    .then(()=>{
        server.listen( porta, ()=>{
            console.log(`Servidor executando na porta ${porta}`);
        } )
    }).catch(e => console.error(e))
