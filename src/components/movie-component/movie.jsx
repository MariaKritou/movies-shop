import react from "react";
import './movie.styles.css';

export const Movie = ({movie, onAdd}) => (

    <div className='card-container'>
        <img alt='movie' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <h4 className='card-title text-left'> {movie.title}</h4> 
        <span className="row">
            <div className="col">
            <p className='card-rate'>
                <span className="oi oi-star"></span>
                 {movie.vote_average}
            </p> 
            </div>
            <div className="col">       
             <button onClick={() => onAdd(movie)}  className="btn oi oi-cart btn-danger">
             </button>
            </div>
        </span>  
    </div>
);
