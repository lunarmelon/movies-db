import React from "react";
import { IMovieCard } from "./types";
import genres from "../../constants/genres.json";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import "./MovieCard.css";
import { Pill } from "../Pill";

const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath,
}) => {
  const navigate = useNavigate();
  const poster = IMAGE_SOURCE + posterPath;

  const getGenre = (genreId: number): string => {
    const key = Object.values(genres.genres).find(
      (genre) => genre.id === genreId,
    );
    if (key) {
      return key.name;
    }
    return "Not classified";
  };

  const navigateMovies = (id: number, movieName: string) => {
    navigate(`${ROUTES.SHOW}${id}`, { state: { movie: movieName } });
  };

  return (
    <div
      className="card-container"
      onClick={() => {
        navigateMovies(movieId, title);
      }}
    >
      <div className="poster-container">
        <img src={poster} className="poster-image" alt="poster" />
        <div className="movie-info">
          <div className="pt-4 pr-3 pb-2 pl-3 table-cell w-full align-middle">
            <Pill title={getGenre(genreId)} />
            <p className="title">{title}</p>
            <div className="voteAverage">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="svg-inline--fa fa-star fa-w-18 my-icons text-yellow-400 h-6 w-6 mb-1 mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <span>{Math.round(voteAverage * 10) / 10}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
