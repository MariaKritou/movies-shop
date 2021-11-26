import react from "react";
import { Movie } from '../movie-component/movie';
import './movie-list.styles.css';

// you can destructure the props object
export const MoviesList = (props) => (
    
    <div className="movie-list">
        {
            props.movies.map(movie => (              
                 <Movie key={movie.id} movie={movie} />                
            ))
        }
    </div>       
);
