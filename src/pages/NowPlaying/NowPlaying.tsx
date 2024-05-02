import React, { useState, useEffect } from "react";
import { getNowPlaying } from "../../services";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../Popular/types";

const NowPlaying = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>(false);

  const getNowPlayingMovies = async () => {
    await getNowPlaying()
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
    getNowPlayingMovies();
    setIsLoading(false);
  }, []);

  return (
    <div className="">
      <div className="">
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

export default NowPlaying;
