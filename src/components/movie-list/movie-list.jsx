import { Movie } from '../movie/movie';
import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/movie-context';
import './movie-list.styles.css';

export const MoviesList = (props) => {
    const ctx = useContext(MovieContext);

    return (<div className="movie-list">
        {
            ctx.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))
        }
    </div>);

};
