const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

// get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.send(movies);
});
// add a movie
router.post("/", async (req, res) => {
  if (!req.body.title) return res.status(400).send(req.body);
  const { title, episode_id, director } = req.body;

  const movie = new Movie({
    title: title,
    episode_id: episode_id,
    release_date: Date.now(),
    director: director,
    date_edited: Date.now(),
  });
  await movie.save();
  res.status(201).send({
    message: "successful",
    payload: movie,
  });
  // res.status(201).send(movie);
});

// update the movie
router.put("/:id", async (req, res) => {
  const { title, episode_id, directed_by } = req.body;
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).send("No such Movie");
  Movie.updateOne();

  res.send(204).send({ message: "update successfully!", payload: movie });
});

// to delete the movie by id
router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);
  if (!movie) return res.status(404).send("No movie with this ID. Sorry!");

  res.send({ message: "deleted successfully!", movie });
});
module.exports = router;
