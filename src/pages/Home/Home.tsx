import React, { useState, useEffect } from "react";
import {
  getPopular,
  getNowPlaying,
  getUpcoming,
  getTopRated,
} from "../../services";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../Popular/types";
import "./Home.css";

const Home = () => {
  const [moviesPopular, setMoviesPopular] = useState<IMovieResponse[]>([]);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<IMovieResponse[]>(
    [],
  );
  const [moviesUpcoming, setMoviesUpcoming] = useState<IMovieResponse[]>([]);

  const [moviesTopRated, setMoviesTopRated] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>(false);

  const getPopularMovies = async () => {
    await getPopular()
      .then((data) => {
        if (data && data.data) {
          setMoviesPopular(data.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies();
    setIsLoading(false);
  }, []);

  const getNowPlayingMovies = async () => {
    await getNowPlaying()
      .then((data) => {
        if (data && data.data) {
          setMoviesNowPlaying(data.data.results);
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

  const getUpcomingMovies = async () => {
    await getUpcoming()
      .then((data) => {
        if (data && data.data) {
          setMoviesUpcoming(data.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getUpcomingMovies();
    setIsLoading(false);
  }, []);

  const getTopRatedMovies = async () => {
    await getTopRated()
      .then((data) => {
        if (data && data.data) {
          setMoviesTopRated(data.data.results);
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
    <div className="home-container">
      <p className="subtitle">Now Playing:</p>
      <div>
        {isLoading && <div>Loading...</div>}
        {errorOnRequest && <div> ...Error</div>}
        <div className="movie-card-container">
          {moviesNowPlaying?.length > 0 &&
            moviesNowPlaying.map((movie) => (
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

      <p className="subtitle">Popular:</p>
      <div>
        {isLoading && <div>Loading...</div>}
        {errorOnRequest && <div> ...Error</div>}

        <div className="movie-card-container">
          {moviesPopular?.length > 0 &&
            moviesPopular.map((movie) => (
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

      <p className="subtitle">Upcoming:</p>
      <div className="">
        {isLoading && <div>Loading...</div>}
        {errorOnRequest && <div> ...Error</div>}
        <div className="movie-card-container">
          {moviesUpcoming?.length > 0 &&
            moviesUpcoming.map((movie) => (
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

      <p className="subtitle">Top Rated:</p>
      <div className="">
        {isLoading && <div>Loading...</div>}
        {errorOnRequest && <div> ...Error</div>}
        <div className="movie-card-container">
          {moviesTopRated?.length > 0 &&
            moviesTopRated.map((movie) => (
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

export default Home;
