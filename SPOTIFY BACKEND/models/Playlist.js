const mongoose = require("mongoose");
//how to create a model
// step 1: require mongoose
// step 2: create a mongoose schema(structure of a user)

const Playlist = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  thumbnail: {
    type: String,
    requried: true,
  },
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Song",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;
