const { Router } = require("express");

const usuarioController = require("../api/controllers/usuarioController");

const usuarioRouter = Router()

usuarioRouter.route('').post( usuarioController.save )

usuarioRouter.route('/:id').put( usuarioController.update )

usuarioRouter.route('/:id').delete( usuarioController.remove )

usuarioRouter.route('/:id').get( usuarioController.findByPK )

usuarioRouter.route('').get( usuarioController.findAll )

module.exports = usuarioRouter





