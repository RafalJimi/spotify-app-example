const Playlist = require(`../models/playlist.model`)

exports.createPlaylistController = async (req, res) => {

  const user_email = req.profile.email
  
  Playlist.find({ user_email: user_email }).exec((err, playlists) => {
    if (err) {
      return res.code(500).send({ err: err })
    } else if (playlists.length === 0) {

      const playlist_name = "New playlist"

      const newPlaylist = new Playlist({
        user_email, playlist_name
      })
      
      newPlaylist.save((err, playlist) => {
        if (err) {
         return res.code(500).send({ error: "Something went wrong, please try again." })
        } else {
         return res.code(200)
        }
      })
      
    } else {

      const arrLength = playlists.length
      
      const playlist_name = `New playlist ${arrLength}`

      const newPlaylist = new Playlist({
        user_email, playlist_name
      })
      
      newPlaylist.save((err, playlist) => {
        if (err) {
          return res.code(500).send({ error: "Something went wrong, please try again." })
        } else {
          return res.code(200)
        }
      })
    }
  })
}

exports.getPlaylistsController = async (req, res) => {

  const user_email = req.profile.email
  
  Playlist.find({ user_email: user_email }).exec((err, playlists) => {
    if (err) {
      return res.code(500).send({ err: "Something went wrong, please try again." })
    } else if (playlists.length === 0) 
      return res.code(204)
    else return res.code(200).send({ playlists: playlists})
  })
}