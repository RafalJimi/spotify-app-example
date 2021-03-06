const { isAuth } = require('../hooks/isAuth')

const { getPlaylistsByTermController ,createPlaylistController, getPlaylistsController, renamePlaylistController, deletePlaylistController, getPlaylistController
} = require('../controllers/playlist.controller')

async function routes(fastify, option, done) {
  
  fastify.decorateRequest('profile', '')

  fastify.addHook('preHandler', isAuth)
  fastify.put('/create', createPlaylistController)
  fastify.get('/get_user_playlists', getPlaylistsController)
  fastify.put('/rename_playlist', renamePlaylistController)
  fastify.put('/delete_playlist', deletePlaylistController)
  fastify.get('/get_user_playlist', getPlaylistController)
  fastify.get('/get_playlists', getPlaylistController)
  fastify.get('/get_playlists_by_term', getPlaylistsByTermController)
}

module.exports = routes