import React, { useState, useEffect } from "react";
import { getTopRated } from "../../services";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../Popular/types";
import "../Home/Home.css";

const TopRated = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>(false);

  const getTopRatedMovies = async () => {
    await getTopRated()
      .then((data) => {
        if (data && data.data) {
          setMovies(data.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getTopRatedMovies();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div>
        <p className="subtitle">Top Rated:</p>
        {isLoading && <div>Loading...</div>}
        {errorOnRequest && <div> ...Error</div>}
        <div className="grid gap-2 grid-cols-4 grid-flow-row">
          {movies?.length > 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
