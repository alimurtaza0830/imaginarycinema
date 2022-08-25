import axios from "axios";
import jwtDecode from "jwt-decode";

const url = "http://localhost:3001/api/";

export async function getMovies() {
  return await axios.get(url + "movies").catch(function(error) {
    console.log("Something went wrong while fetching movies", error);
  });
}

export async function getSearchResults(searchTerm) {
  return await axios
    .get(url, { params: { search: searchTerm } })
    .catch(function(error) {
      console.log("Something went wrong with you search", error);
    });
}

export function register(user) {
  return axios
    .post(url + "users", {
      email: user.email,
      password: user.password,
      name: user.name,
    })
    .catch((error) => {
      return error.response;
    });
}

export function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  let user = jwtDecode(token);
  return user;
}

export function login(user) {
  return axios
    .post(url + "auth", {
      email: user.email,
      password: user.password,
    })
    .catch((error) => {
      return error.response;
    });
}
