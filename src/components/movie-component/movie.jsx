import react from "react";
import './movie.styles.css';

export const Movie = (props) => (

    <div className='card-container'>
        <img alt='movie' src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <h4 className='card-title text-left'> {props.movie.title}</h4> 
        <span className="row">
            <div className="col">
            <p className='card-rate'>
                <span className="oi oi-star"></span>
                 {props.movie.vote_average}
            </p> 
            </div>
            <div className="col">       
             <button className="btn oi oi-cart btn-danger">
             </button>
            </div>
        </span>  
    </div>
);
