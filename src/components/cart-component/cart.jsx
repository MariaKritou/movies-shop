import React from "react";
import './cart.styles.css';

// movies should pass as a prop
// movies in cart maybe should be a component
// total price should be a state in component
export const Cart = () =>(
  
<div className="card text-white bg-dark" >
  <div className="card-header cart-title">Cart</div>
    <div className="card-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
            <div className="row">
                <div className="col-5">Venom</div>
                <div className="col-4">1 x 15$</div>
                <div className="col-3">
                  <button className="oi oi-plus"></button>
                  <button className="oi oi-minus"></button>
                </div>
            </div>   
        </li>
        <li className="list-group-item ">
            <div className="row">
                <div className="col-5">Shrek</div>
                <div className="col-4">1 x 10$</div>
                <div className="col-3">
                  <button className="oi oi-plus"></button>
                  <button className="oi oi-minus"></button>
                </div>
            </div>   
        </li>
      </ul>
      <div className="row mt-2">
                <div className="col-9"><strong>Total Price:</strong> </div>
                <div className="col-3"><strong>25</strong>$</div>
            </div>   
      <div className="row justify-content-md-center mt-3">
      <div className="col-md-5">
          <button type='button' className='btn btn-warning btn-cart'>Checkout</button>
      </div>
    </div>
  </div>
</div>

);