import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import './movie.styles.css';

export const Movie = ({ movie }) => {

    const ctx = useContext(CartContext);

    return (
        <div className="col mb-4">
        <div className='card-container'>
            <img alt='movie' src={movie.poster_path === null ? window.location.origin + '/default.png' : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4 className='card-title text-left'> {movie.title}</h4>
            <span className="row">
                <div className="col">
                    <p className='card-rate'>
                        <span className="oi oi-star"></span>
                        {movie.vote_average}
                    </p>
                </div>
                <div className="col">
                    {ctx.cartItems.find(x => x.id === movie.id) ?
                        <button onClick={() => ctx.onRemove(movie)} className="btn oi oi-trash btn-danger" />
                        :
                        <button onClick={() => ctx.onAdd(movie)} className="btn oi oi-cart btn-warning" />
                    }
                </div>
            </span>
        </div>
        </div>)
};
