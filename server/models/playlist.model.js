const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
      required: true,
    },
    playlist_name: {
      type: String,
      trim: true,
      required: true,
    },
    songs: {
      type: Array,
      default: []
    },
    
  },
  {
    timestamps: true,
  }
);

playlistSchema.methods = {
  createPlaylist: function (userName, arrLength) {
    
    const newPlaylist = {
      user_name: userName,
      playlist_name: `New playlist ${arrLength}`
    }
    
    return `New playlist ${arrLength}`
  }
}

module.exports = mongoose.model("Playlist", playlistSchema);