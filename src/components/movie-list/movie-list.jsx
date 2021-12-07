import { Movie } from '../movie-component/movie';
import './movie-list.styles.css';

export const MoviesList = (props) => (
    
    <div className="movie-list">
        {
            props.movies.map((movie) => (              
                 <Movie key={movie.id} movie={movie} onAdd={props.onAdd} onRemove={props.onRemove} cartItems={props.cartItems} />                
            ))
        }
    </div>       
);
