import React from 'react'
import { IGenre, IMovieCard } from './types'
import genres from '../../constants/genres.json'
import { IMAGE_SOURCE } from '../../constants/moviesMock'

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath
}) => {
    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number): string => {
        const key = Object.values(genres.genres).find(genre => genre.id === genreId);
        if (key){
            return key.name;
        }
        return "Not classified"
    }
  return (
    <div>
        <div>
            <img src={poster} alt="poster" />
        </div>
        <div>
            <div>
                {getGenre(genreId)}
            </div>
            <p>{title}</p>
            <p>* {voteAverage} / 10</p>
        </div>
    </div>
  )
}

export default MovieCard
