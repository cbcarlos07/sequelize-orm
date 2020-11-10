
const initRoute = require('./init.route')
const usuarioRouter = require('./usuario.route')
const tipoUsuarioRouter = require('./tipoUsuario.route')
const prefix = '/api/v1'

const routesConfig = server => {
    server.use( '/', initRoute )
    server.use(`${prefix}/tipo-usuario`, tipoUsuarioRouter)
    server.use(`${prefix}/usuario`, usuarioRouter)
}

module.exports = routesConfig

