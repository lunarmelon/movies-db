import React from "react";
import { MovieCard } from "../../components/MovieCard";
import { movies } from "../../constants/moviesMock";

const Home = () => {
  return (
    <div className="flex overflow-x-auto">
      <p className="font-bold">Latest</p>
      <div className="flex">
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
        <MovieCard
          movieId={movies[8].id}
          posterPath={movies[8].poster_path}
          title={movies[8].title}
          voteAverage={movies[8].vote_average}
          genreId={movies[8].genre_ids[8]}
        />
      </div>
    </div>
  );
};

export default Home;
