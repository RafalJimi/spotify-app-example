const { registerSchema } = require('../schemas/auth.schema')

const { registerController } = require('../controllers/auth.controllers')

async function routes(fastify, option, done) {
  fastify.post('/register', /* registerSchema, */ registerController)
  
  done()
}

module.exports = routes