const User = require('../models/auth.model')

exports.getUserFavouriteSongsController = async (req, res) => {

  const favArray = req.profile.fav_songs

  return res.code(200).send({favSongs: favArray})
}

exports.addToFavouriteController = async (req, res) => {
  
  const userID = req.profile._id
  const favArray = req.profile.fav_songs
  const song = req.body

  if (favArray.findIndex(favSong => favSong.previewUrl === song.previewUrl) === -1) {
    User.findOneAndUpdate({ _id: userID },
      { $push: { fav_songs: song } },
      { new: true }).exec((err, user) => {
        if (err) {
          return res.code(500).send({err: "Something went wrong, please try again."})
        } else return res.code(200).send({ favSongs: user.fav_songs})
      })
  } else return res.code(202).send({message: "This song is already added to favourites."})
}

exports.removeFromFavouriteController = async (req, res) => {
  
  const userID = req.profile._id
  const favArray = req.profile.fav_songs
  const song = req.body

  if (favArray.findIndex(favSong => favSong.previewUrl === song.previewUrl) === -1) {
    return res.code(202).send({message: "This song is not added to your favourites."})
  } else
    User.findOneAndUpdate({ _id: userID },
      { $pull: { fav_songs: song } },
      { new: true }).exec((err, user) => {
        if (err) {
          return res.code(500).send({err: "Something went wrong, please try again."})
        } else return res.code(200).send({ favSongs: user.fav_songs})
      })
}