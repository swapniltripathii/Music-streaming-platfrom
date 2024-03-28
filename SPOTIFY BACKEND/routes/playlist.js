const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

const router = express.Router();

// Route 1: create a playlist
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res.status(301).json({ err: "Insufficient Data" });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);
// Route 2: get a playlist by Id
//we will get playlist id as a route parameter and we will return the playlist having that id
// /something1/something2/something3 --> exact match
// /something1/something2/something4 --> this will not call the api on the previous line
// if we are doing /playlist/get/:playlistId (focus the :) --> this means that playlist is a variable
// to which we can assign any value
// if you call anthing of format /playlist/get/suhuhs (suhuhs can be anything), this api is called
// if you called /playlist/get/shush, the playlistId variable gets assigned the value

router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({ _id: playlistId }).populate({
      path: "songs",
      populate: {
        path: "artist",
      },
    });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(playlist);
  }
);

// get all playlists made by me
router.get(
  "/get/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.user._id;

    const playlists = await Playlist.find({ owner: artistId }).populate(
      "owner"
    );
    return res.status(200).json({ data: playlists });
  }
);

// get all playlists made by an artist
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;

    //we can do this : check if artist with given artist id exists
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(304).json({ err: "Invalid Artist Id" });
    }

    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
  }
);

// add a song to a playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    // step 0: get the playlist if valid
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(304).json({ err: "Playlist does not exist" });
    }

    // step 1: check if currentuser owns the playlist or is a collaborator
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res.status(400).json({ err: "not allowed" });
    }
    // step 2: check if the song is a valid song
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: "Song does not exist" });
    }

    // step 3: we can now simply add the song to the playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
