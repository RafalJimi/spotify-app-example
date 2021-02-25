const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
  {
    user_email: {
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

module.exports = mongoose.model("Playlist", playlistSchema);