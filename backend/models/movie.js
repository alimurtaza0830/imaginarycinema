const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  episode_id: Number,
  director: String,
  release_date: Date,
  date_edited: Date,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
