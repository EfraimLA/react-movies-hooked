import React from 'react';
import './movie.css';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie}) => {
    const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <a href={`https://imdb.com/title/${movie.imdbID}`} target="_blank">
                    <img width="200" alt={`The Movie Titled: ${movie.Title}`} src={poster}/>
                </a>
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie;
