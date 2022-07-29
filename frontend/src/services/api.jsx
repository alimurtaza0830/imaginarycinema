import axios from "axios";

const url = "https://swapi.dev/api/films";

export async function getMovies() {
  return await axios.get(url).catch(function (error) {
    console.log("Something went wrong while fetching movies", error);
  });
}

export async function getSearchResults(searchTerm) {
  return await axios
    .get(url, { params: { search: searchTerm } })
    .catch(function (error) {
      console.log("Something went wrong with you search", error);
    });
}
