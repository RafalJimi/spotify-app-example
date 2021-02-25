const { isAuth } = require('../hooks/isAuth')

const { createPlaylistController, getPlaylistsController
} = require('../controllers/playlist.controller')

async function routes(fastify, option, done) {
  fastify.decorateRequest('profile', '')

  fastify.addHook('preHandler', isAuth)
  fastify.put('/create', createPlaylistController)
  fastify.get('/get_playlists', getPlaylistsController)
}

module.exports = routes