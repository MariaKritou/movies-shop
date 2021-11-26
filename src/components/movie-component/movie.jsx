import react from "react";
import './movie.styles.css';

// you can destructure the props object
// button should have an action event

/*
 we do not have functionallity yet,
 but a button handler with console.log would be helpful 
 for checking button's events
*/

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
