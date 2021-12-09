import React, { Children } from 'react';
import Layout from './components/layout/layout';
import Pagination from './components/pagination/pagination';
import { MoviesList } from './components/movie-list/movie-list';
import { Cart } from './components/cart/cart';
import { Search } from './components/search-box/search-box';
import { ToastContainer } from 'react-toastify';
import { MovieProvider } from './contexts/movie-context';
import { CartProvider } from './contexts/cart-context';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  //---------- Code Review-------------
  // Have a check to the responsiveness! When the width becomes smaller
  // bring the cart div and the movies list div in column layout!
  //---------- End Code Review-------------

  return (

    <CartProvider>
      <Layout children={Children}>
        <ToastContainer />
        <MovieProvider>
          <div className="App">
            <div className="row">
              <Search placeholder='Search movies' />
            </div>
            <div className="row">
              <div className="col-9">
                <MoviesList />
                <Pagination />
              </div>
              <div className="col-3">
                <Cart />
              </div>
            </div>
          </div>
        </MovieProvider>
      </Layout>
    </CartProvider>

  );
}

export default App;
