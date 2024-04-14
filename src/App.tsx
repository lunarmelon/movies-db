import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { movies } from "./constants/moviesMock";

function App() {
  return (
    <div className="App flex mt-3 ml-1 mr-1">
      <MovieCard
        movieId={movies[0].id}
        posterPath={movies[0].poster_path}
        title={movies[0].title}
        voteAverage={movies[0].vote_average}
        genreId={movies[0].genre_ids[0]}
      />
      <MovieCard
        movieId={movies[1].id}
        posterPath={movies[1].poster_path}
        title={movies[1].title}
        voteAverage={movies[1].vote_average}
        genreId={movies[1].genre_ids[1]}
      />
      <MovieCard
        movieId={movies[5].id}
        posterPath={movies[5].poster_path}
        title={movies[5].title}
        voteAverage={movies[5].vote_average}
        genreId={movies[5].genre_ids[5]}
      />
      <MovieCard
        movieId={movies[4].id}
        posterPath={movies[4].poster_path}
        title={movies[4].title}
        voteAverage={movies[4].vote_average}
        genreId={movies[4].genre_ids[4]}
      />
    </div>
  );
}

export default App;
