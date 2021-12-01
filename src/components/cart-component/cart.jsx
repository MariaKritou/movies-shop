import React from "react";
import './cart.styles.css';

// movies in cart maybe should be a component
export const Cart = ({ cartItems, totalPrice, onAdd, onRemove, purchaseMovies }) => (
  <div className="card text-white bg-dark" >
    <div className="card-header cart-title">Cart</div>
    <div className="card-body">
      {cartItems.length !== 0 ?

        <ul className="list-group list-group-flush">
          {cartItems.map((movie) => (
            <li key={movie.id} className="list-group-item ">
              <div className="row">
                <div className="col-5">{movie.title}</div>
                <div className="col-4">{movie.quantity} x 10$</div>
                <div className="col-3">
                  <button onClick={() => onAdd(movie)} className="oi oi-plus"></button>
                  <button onClick={() => onRemove(movie)} className="oi oi-minus"></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        : <p>No movies in your cart</p>
      }
      <div className="row mt-2">
        <div className="col-9"><strong>Total Price: </strong></div>
        <div className="col-3"><strong>{totalPrice}</strong>$</div>
      </div>
      <div className="row justify-content-md-center mt-3">
        <div className="col-md-5">
          <button onClick={() => purchaseMovies()} type='button' className={`btn btn-warning btn-cart ${cartItems.length === 0 ? 'disabled' : ''}`} >Checkout</button>
        </div>
      </div>
    </div>
  </div>

);