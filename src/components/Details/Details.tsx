import React from "react";
import { IDetails } from "./types";
import { useNavigate } from "react-router-dom";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import { ROUTES } from "../../routes/constants";
import genre from "../../constants/genres.json";
import "./Details.css";
import { Pill } from "../Pill";

const Details: React.FC<IDetails> = ({
  title,
  overview,
  posterPath,
  genreId,
  runtime,
  vote_average,
  vote_count,
  release_date,
}) => {
  const navigate = useNavigate();
  const poster = IMAGE_SOURCE + posterPath;

  const getGenre = (genreId: number): string => {
    const key = Object.values(genre.genres).find(
      (genre) => genre.id === genreId,
    );
    if (key) {
      return key.name;
    }
    return "Not classified";
  };

  return (
    <div className="main-container">
      <div className="movie-details-info">
        <img className="poster-details-image" src={poster} alt="poster" />
        <div className="movie-details-overview">
          <p className="movie-title">{title}</p>
          <nav>
            <ul className="flex mr-96">
              <li className="movie-breadcrumbs">
                <p className="flex">
                  <img
                    src="https://saki.ichoria.org/f/c1593/Untitled_design5.png"
                    alt="Movie runtime"
                    className="movie-breadcrumbs-icon"
                  />
                  {runtime} min.
                </p>
              </li>
              <li className="movie-breadcrumbs">
                <p className="flex">
                  <img
                    src="https://saki.ichoria.org/f/8q56q/Untitled_design6.png"
                    alt="Movie runtime"
                    className="movie-breadcrumbs-icon"
                  />
                  {release_date.toString()}
                </p>
              </li>
              <li className="movie-breadcrumbs">
                <p className="flex">
                  <img
                    src="https://saki.ichoria.org/f/agzkg/Untitled_design7.png"
                    alt="Movie runtime"
                    className="movie-breadcrumbs-icon"
                  />
                  {Math.round(vote_average * 10) / 10}
                </p>
              </li>
              <li className="movie-breadcrumbs">
                <p className="flex">
                  <img
                    src=" https://saki.ichoria.org/f/hl4jd/Untitled_design8.png"
                    alt="Movie runtime"
                    className="movie-breadcrumbs-icon"
                  />
                  {vote_count}
                </p>
              </li>
            </ul>
          </nav>

          <p className="movie-overview-text">{overview}</p>
          <div className="pills">
            <div className="mt-1 mb-3 flex-1 ml-2">
              <p className="text-black font-bold py-1 text-lg ml-1">Genre</p>
              <div className="genre-info">{getGenre(genreId)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
