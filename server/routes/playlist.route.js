const { isAuth } = require('../hooks/isAuth')

const { createPlaylistController, getPlaylistsController, renamePlaylistController, deletePlaylistController
} = require('../controllers/playlist.controller')

async function routes(fastify, option, done) {
  fastify.decorateRequest('profile', '')

  fastify.addHook('preHandler', isAuth)
  fastify.put('/create', createPlaylistController)
  fastify.get('/get_playlists', getPlaylistsController)
  fastify.put('/rename_playlist', renamePlaylistController)
  fastify.put('/delete_playlist', deletePlaylistController)
}

module.exports = routes