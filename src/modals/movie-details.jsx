import { MovieContext } from '../contexts/movie-context';
import { useContext } from 'react';
import './movie-details.css';

export const MovieDetailsModal = () => {

    const ctx = useContext(MovieContext);

    return (
        <div className="modal"tabindex="-1" >
            <div className="overlay" onClick={() => ctx.setModal(!ctx.modal)}></div>
            <div class="modal-dialog">
                <div className="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h5 class="modal-title">{ctx.movieDetails.title}</h5>
                        <button type="button" class="btn-close btn-secondary" onClick={() => ctx.setModal(!ctx.modal)}></button>
                    </div>
                    <div class="modal-body">
                        
                        <img className="img-width" src={ctx.movieDetails.backdrop_path=== null ? window.location.origin + '/default.png' :`https://image.tmdb.org/t/p/w500/${ctx.movieDetails.backdrop_path}`}/>
                     
                    </div>
                    <div class="modal-footer">
                      <p>{ctx.movieDetails.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};