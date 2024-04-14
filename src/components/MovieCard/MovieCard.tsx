import React from "react";
import { IGenre, IMovieCard } from "./types";
import genres from "../../constants/genres.json";
import { IMAGE_SOURCE } from "../../constants/moviesMock";

const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath,
}) => {
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

  const renderStarRating = (voteAverage: number): JSX.Element => {
    const numStars = Math.round(voteAverage / 2);

    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(
          <svg
            key={i}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star fa-w-18 my-icons text-yellow-400 w-8 h-8 mr-1 mt-1"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>,
        );
      } else {
        stars.push(
          <svg
            key={i}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="star"
            className="svg-inline--fa fa-star fa-w-18 my-icons text-yellow-400 h-8 w-8 mr-1 mt-1"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>,
        );
      }
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div>
      <div className="h-auto float-left overflow-x-hidden overflow-y-hidden block relative mt-0 mr-5 mb-7 ml-0 flex-shrink rounded-t rounded-b">
        <div className="ml-0 bg-black float-none">
          <img
            className="object-cover w-full h-full transform scale-100 transition-transform duration-500 ease-in-out hover:scale-110"
            src={poster}
            alt="poster"
          />
        </div>
        <div className="bg-gradient-to-t from-black via-gray-800 to-transparent bottom-0 left-0 w-full h-auto rounded-b-md absolute">
          <div className="pt-4 pr-3 pb-4 pl-3 table-cell w-full align-middle">
            <div
              className="bg-red-500 text-white pt-2 pr-2 pb-2 pl-2 text-xs font-medium leading-3
                  mt-0 mr-0 mb-1 ml-0 table"
            >
              {getGenre(genreId)}
            </div>
            <div className="text-white text-xl font-bold leading-4 mt-3 flex">
              {title}
            </div>
            <div className="flex mt-2">{renderStarRating(voteAverage)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
