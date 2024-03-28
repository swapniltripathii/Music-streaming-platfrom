const mongoose = require("mongoose");
//how to create a model
// step 1: require mongoose
// step 2: create a mongoose schema(structure of a user)

const Song = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    thumbnail:{
        type: String,
        requried: true,
    },
    track:{
        type: String,
        requried: true,
    },
    artist:{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
 
 
 
})

const SongModel = mongoose.model("Song",Song);

module.exports = SongModel;


