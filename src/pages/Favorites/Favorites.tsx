import React, { useEffect, useState } from "react";
import { IMovieDetail } from "../Show/types";
import { MovieCard } from "../../components/MovieCard";
import { getDetails, getPopular } from "../../services";

const Favorites = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shows, setShows] = useState<IMovieDetail[]>([]);
  const favorites: string = localStorage.getItem("favorites") || "";

  const runGetFavorites = async () => {
    if (favorites.length) {
      const favoritesArray = JSON.parse(favorites);
      const newShows = await Promise.all(
        favoritesArray.map(async (favorite: string) => {
          return getDetails(String(favorite))
            .then((res) => {
              if (res && res.data) {
                return res.data;
              }
            })
            .catch((err) => {
              console.log(err, "err");
            });
        }),
      );
      setShows(newShows);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    runGetFavorites();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <div>
          <h2>Favorites</h2>
          {favorites && favorites.length > 0 ? (
            <div>
              {shows &&
                shows.map((show: IMovieDetail) => (
                  <MovieCard
                    key={show.id}
                    movieId={show.id}
                    title={show.title}
                    genreId={show.genres[0].id}
                    posterPath={show.poster_path}
                    voteAverage={show.vote_average}
                  />
                ))}
            </div>
          ) : (
            <div>
              <h2>Oops... you don't have any favorites yet.</h2>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Favorites;
