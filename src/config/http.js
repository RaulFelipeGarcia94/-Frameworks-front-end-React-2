import axios from "axios";

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2RlMzllMmRiMDA5ZDc0YWZmMmVjYzkwNmI3MDllNyIsInN1YiI6IjYxYTgxYzdkYTI0YzUwMDA0NWQwZWU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oj0eBp0_WR-VIGAvgShiwMaThZ1RvKHmCf0-wGZrM6k",
  },
});
