import React from "react";
import './cart.styles.css';

// movies should pass as a prop
// movies in card maybe should be a component
// class -> className
// total price should be a state in component
export const Cart = () =>(
  
<div class="card text-white bg-dark" >
  <div class="card-header cart-title">Cart</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item ">
            <div className="row">
                <div className="col-5">Venom</div>
                <div className="col-4">1 x 15$</div>
                <div className="col-3">
                  <button className="oi oi-plus"></button>
                  <button className="oi oi-minus"></button>
                </div>
            </div>   
        </li>
        <li class="list-group-item ">
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
      <div class="col-md-5">
          <button type='button' className='btn btn-warning btn-cart'>Checkout</button>
      </div>
    </div>
  </div>
</div>
);