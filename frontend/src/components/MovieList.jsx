import React, { useEffect, useState } from "react";
import { getMovies, getSearchResults } from "../services/api";
import Movie from "./Movie";

const MovieList = () => {
  const [allMovies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // const [filteredM, setFiltered] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovies() {
      const movies = await getMovies();
      movies && setMovies(movies.data.results);
      setisLoading(false);
    }
    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, []);

  // getting search results from backend
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMoviesFromBE() {
      let filtered = allMovies;
      if (searchTerm) {
        filtered = await getSearchResults(searchTerm);
        setMovies(filtered.data.results);
      }
    }
    fetchMoviesFromBE();

    return () => {
      abortController.abort();
    };
  }, [searchTerm]);

  // filtering movies on frontend;
  // const filterMovies = () => {
  //   let filtered = allMovies;
  //   if (searchTerm)
  //     filtered = allMovies.filter((m) =>
  //       m.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  //     );
  //   return filtered;
  // };

  // let filteredMovies = filterMovies();

  return isLoading ? (
    <div>Loading... </div>
  ) : (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 mb-3">
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Select your favourite movie"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="row">
        {/* change to filteredMovies to filteredM if search from backend is desired*/}
        {allMovies &&
          allMovies.map((film, index) => (
            <Movie film={film} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
