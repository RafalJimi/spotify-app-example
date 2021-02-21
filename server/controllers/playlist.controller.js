const Playlist = require(`../models/playlist.model`)

exports.createPlaylist = async (req, res) => {

  Playlist.find({ user_name: "userName" }).exec((err, playlists) => {
    if (!playlists) {

      const firstPlaylist = {
        user_name: "username",
        playlistName: "New playlist"
      }

      const newPlaylist = new Playlist({
        firstPlaylist
      })
      
      newPlaylist.save((err, playlist) => {
        if (err) {
          send.code(202).send({ message: "Something went wrong, please try again." })
        } else {
          send.code(200).send({ playlistName: `New playlist`, playlistId: playlist._id })
        }
      })
      
    } else {

      const arrLength = playlists.length
      
      const newPlaylist = Playlist.createPlaylist("test", arrLength)
      
      newPlaylist.save((err, playlist) => {
        if (err) {
          send.code(202).send({ message: "Something went wrong, please try again." })
        } else {
          send.code(200).send({ playlistName: playlist.user_name, playlistId: playlist._id })
        }
      })
    }
  })
}