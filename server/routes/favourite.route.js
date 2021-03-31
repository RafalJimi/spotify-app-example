const { isAuth } = require('../hooks/isAuth')

const { getUserFavouriteSongsController ,addToFavouriteController, removeFromFavouriteController
} = require('../controllers/favourite.controller')

async function routes(fastify, option, done) {
  
  fastify.decorateRequest('profile', '')

  fastify.addHook('preHandler', isAuth)
  fastify.get('/get_favourite', getUserFavouriteSongsController)
  fastify.put('/add_to_favourite', addToFavouriteController)
  fastify.put('/remove_from_favourite', removeFromFavouriteController)
  
  done()
}

module.exports = routes