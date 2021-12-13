import { Movie } from '../movie/movie';
import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/movie-context';
import './movie-list.styles.css';

export const MoviesList = (props) => {
    const ctx = useContext(MovieContext);

    return (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
        {
            ctx.movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))
        }
    </div>);

};
