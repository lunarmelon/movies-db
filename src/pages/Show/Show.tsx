import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import httpInstance from "../../services/httpInstance";

const Show: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorOnRequest, setErrorOnRequest] = useState<boolean>(false);

  const goBack = () => {
    navigate(-1);
  };

  const getMovieDetails = async () => {
    let res: any;
    const endpoint = `${id}?api_key${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance
      .get(endpoint)
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = err.response;
      });
    return res;
  };

  useEffect(() => {
    // Aquí llamar endpoint de los detalles de la película con el id
    // endpoint de recomendaciones
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {errorOnRequest && <div> ...Error</div>}
      <div>
        <div>Show: {id}</div>
        <div>Título desde el state: {location.state.movie}</div>
        <button onClick={goBack}>Ir atrás</button>
      </div>
    </div>
  );
};

export default Show;
