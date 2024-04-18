import React from "react";
import { MovieCard } from "../../components/MovieCard";
import { movies } from "../../constants/moviesMock";

const Home = () => {
  return (
    <div className="w-full">
      <p className="font-bold text-2xl ml-4 mt-3">Latest:</p>
      <div className="flex overflow-x-auto p-3">
        <div className="flex w-full">
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
            movieId={movies[4].id}
            posterPath={movies[4].poster_path}
            title={movies[4].title}
            voteAverage={movies[4].vote_average}
            genreId={movies[4].genre_ids[4]}
          />
          <MovieCard
            movieId={movies[5].id}
            posterPath={movies[5].poster_path}
            title={movies[5].title}
            voteAverage={movies[5].vote_average}
            genreId={movies[5].genre_ids[5]}
          />
          <MovieCard
            movieId={movies[6].id}
            posterPath={movies[6].poster_path}
            title={movies[6].title}
            voteAverage={movies[6].vote_average}
            genreId={movies[6].genre_ids[6]}
          />
          <MovieCard
            movieId={movies[7].id}
            posterPath={movies[7].poster_path}
            title={movies[7].title}
            voteAverage={movies[7].vote_average}
            genreId={movies[7].genre_ids[7]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
