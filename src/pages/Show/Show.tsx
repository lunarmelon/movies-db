import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getDetails } from "../../services";
import { IMovieDetail } from "./types";

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
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {errorOnRequest && <div> ...Error</div>}
      <div>
        {movies && (
          <div>
            <div>Show: {id}</div>
            <div>Título desde el state: {location.state.movie}</div>
            <div>{movies.overview}</div>
          </div>
        )}

        <button onClick={goBack}>Ir atrás</button>
      </div>
      {isFavorite ? (
        <div>
          <button onClick={removeFavorite}>Remove from Favorites</button>
        </div>
      ) : (
        <div>
          <button onClick={addFavorite}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default Show;
