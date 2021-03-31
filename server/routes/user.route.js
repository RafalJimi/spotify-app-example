const { isAuth } = require('../hooks/isAuth')

const { getUserNicknameController } = require('../controllers/user.controller')

async function routes(fastify, option, done) {
  
  fastify.decorateRequest('profile', '')

  fastify.addHook('preHandler', isAuth)
  fastify.get('/get_user_nickname', getUserNicknameController)
  
  done()
}

module.exports = routes