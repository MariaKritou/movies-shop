import react from "react";
import './movie.styles.css';

export const Movie = ({id, title, poster_path, vote_average}) => (

    <div className='card-container'>
        <img alt='movie' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <h4 className='card-title text-left'> {title}</h4> 
        <span className="row">
            <div className="col">
            <p className='card-rate'>
                <span className="oi oi-star"></span>
                 {vote_average}
            </p> 
            </div>
            <div className="col">       
             <button onClick={() => alert("Come Buy More")} className="btn oi oi-cart btn-danger">
             </button>
            </div>
        </span>  
    </div>
);
