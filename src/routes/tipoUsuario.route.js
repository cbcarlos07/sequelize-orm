const { Router } = require("express");

const tipoUsuarioController = require("../api/controllers/tipoUsuarioController");

const tipoUsuarioRouter = Router()

tipoUsuarioRouter.route('').post( tipoUsuarioController.save )

tipoUsuarioRouter.route('/:id').put( tipoUsuarioController.update )

tipoUsuarioRouter.route('/:id').delete( tipoUsuarioController.remove )

tipoUsuarioRouter.route('/:id').get( tipoUsuarioController.findByPK )

tipoUsuarioRouter.route('').get( tipoUsuarioController.findAll )

module.exports = tipoUsuarioRouter





