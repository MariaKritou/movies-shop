import React, { useContext } from "react";
import { CartContext } from '../../contexts/cart-context';
import './cart.styles.css';

// movies in cart maybe should be a component
export const Cart = () => {
  const ctx = useContext(CartContext);
  const auth = localStorage.getItem('authenticated');
  let text = '';

  auth === "true" ? text = "No items in your cart" : text = "Login to buy movies";

  return (
    <div className="card text-white bg-dark" >
      <div className="card-header cart-title">Cart</div>
      <div className="card-body">


        {ctx.cartItems.length !== 0 ?

          <ul className="list-group list-group-flush">
            {ctx.cartItems.map((movie) => (
              <li key={movie.id} className="list-group-item ">
                <div className="row">
                  <div className="col-6">{movie.title}</div>
                  <div className="col-3" align="right">
                    <span>{movie.quantity} x 10$</span>
                  </div>
                  <div className="col-3">
                    <button onClick={() => ctx.onAdd(movie)} className="btn btn-secondary oi oi-plus"></button>
                    <button onClick={() => ctx.onRemove(movie)} className="btn btn-secondary oi oi-minus"></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          : <p>{text}</p>
        }
        <div className="row mt-2">
          <div className="col-9"><strong>Total Price: </strong></div>
          <div className="col-3"><strong>{ctx.totalPrice}</strong>$</div>
        </div>
        <div className="row justify-content-md-center mt-3">
          <div className="col-md-5">
            <button onClick={() => ctx.purchaseMovies()} type='button' className={`btn btn-warning btn-cart ${ctx.cartItems.length === 0 ? 'disabled' : ''} ${ctx.btnDisable}`} >Checkout</button>
          </div>
        </div>
      </div>
    </div>

  )

}