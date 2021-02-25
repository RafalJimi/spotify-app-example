/* const { registerSchema, loginSchema } = require('../schemas/auth.schema') */

const { registerController,
  loginController,
  authController,
} = require('../controllers/auth.controllers')

async function routes(fastify, option, done) {
  fastify.post('/register', registerController)
  fastify.post('/login', loginController)
  fastify.get('/is_auth', authController)

  done()
}

module.exports = routes