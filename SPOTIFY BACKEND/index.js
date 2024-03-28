//npm init : package.json--this is a node project
// npm i express: expressJs package installed

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const cors = require("cors");
const app = express();
const port = 8081;
//require("dotenv").config();

app.use(cors());
app.use(express.json());
// connect mongodb to our node app
// mongoose.connect() takes 2 arguments:1 which db to connect to (db url)
// 2.coonection options
mongoose
  .connect("mongodb://localhost:27017/Rush")
  .then((x) => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log("error while connecting");
  });

// setup passport jwt

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "ThisIsASecretCode";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.identifier }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

// api : get type :/: return text"hello world"
app.get("/", (req, res) => {
  //req contains all data for request
  //res contains all data for response
  res.send("hello world");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// now we want to tell express will run on localhost:8000
app.listen(port, () => {
  console.log("App is running on port " + port);
});
