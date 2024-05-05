import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getDetails, getRecommendations } from "../../services";
import { IMovieDetail, IMovieDetailResponse } from "./types";
import { Details } from "../../components/Details";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../Popular/types";
import "./Show.css";

const Show: React.FC = () => {
  const { id } = useParams();
  const stringId = id ? id.toString() : "defaultId";
  const location = useLocation();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovieDetail>();
  const [Favorites, setFavorites] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>(false);
  const [recommendedMovies, setRecommendedMovies] = useState<IMovieResponse[]>(
    [],
  );

  const goBack = () => {
    navigate(-1);
  };

  const getMovieDetails = async () => {
    await getDetails(stringId)
      .then((data) => {
        console.log(data.data, "aaa");
        setMovies(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovieRecommendations = async () => {
    await getRecommendations(stringId)
      .then((data) => {
        console.log(data.data, "aaa");
        setRecommendedMovies(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFavorite = () => {
    const favs = Favorites.length > 0 ? JSON.parse(Favorites) : [];
    const newFavorites = [...favs, id];
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(true);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = () => {
    const favs = Favorites.length > 0 ? JSON.parse(Favorites) : [];
    let newFavorites = [...favs];
    newFavorites = newFavorites.filter((e) => e !== id);
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(false);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    // Aquí llamar endpoint de los detalles de la película con el id
    // endpoint de recomendaciones
    const favs = localStorage.getItem("favorites") || "";
    setFavorites(favs);
    if (favs.includes(String(id))) {
      setIsFavorite(true);
    }
    setIsLoading(true);
    getMovieDetails();
    getMovieRecommendations();
    setIsLoading(false);
  }, [stringId]);

  return (
    <div className="main-container">
      <div className="flex justify-between px-6">
        <button className="back-button" onClick={goBack}>
          <img
            src="https://saki.ichoria.org/f/1tpw3/Untitled_design2.png"
            alt="Cyberia Movies logo"
            className="w-4 h-3 mt-2 mr-2"
          />
          Ir atrás
        </button>
        {isFavorite ? (
          <div>
            <button className="unfavorite-button" onClick={removeFavorite}>
              <img
                src="https://saki.ichoria.org/f/sdn1o2oca3j0skr/Untitled_design4.png"
                alt="Remove favorite movie"
                className="w-4 h-4 mt-1.5 mr-2"
              />
              Remove from Favorites
            </button>
          </div>
        ) : (
          <div>
            <button className="favorite-button" onClick={addFavorite}>
              <img
                src=" https://saki.ichoria.org/f/48mcz/Untitled_design3.png "
                alt="Add favorite movie"
                className="w-4 h-4 mt-1.5 mr-2"
              />
              Add to Favorites
            </button>
          </div>
        )}
      </div>

      {isLoading && <div>Loading...</div>}
      {errorOnRequest && <div> ...Error</div>}
      <div>
        <div>
          {movies && (
            <Details
              key={movies.id}
              overview={movies.overview}
              title={movies.title}
              posterPath={movies.poster_path}
              genreId={movies.genres[0].id}
              runtime={movies.runtime}
              vote_average={movies.vote_average}
              vote_count={movies.vote_count}
              release_date={movies.release_date}
            />
          )}
        </div>
      </div>
      <p className="subtitle-recommendations">Recommended:</p>
      <div className="flex overflow-x-auto mb-5">
        {recommendedMovies?.length > 0 &&
          recommendedMovies.map((movie) => (
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
  );
};

export default Show;
