import axios from "axios";
const api_key = "API KEY KALIAN";

export const getMovieList = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  );
  return response.data.results;
};

export const getOneMovie = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  );

  return response.data;
};

export const searchMovie = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`
  );

  return response.data.results;
};
