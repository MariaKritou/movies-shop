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

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (

    <CartProvider>
      <Layout children={Children}>
        <ToastContainer />
        <MovieProvider>
          <div className="App container-fluid">
            <div className="row mb-2 drill-down" >
              <button className="btn btn-secondary oi oi-chevron-bottom" onClick={handleScroll}></button>
            </div>
            <div className="row">
              <Search placeholder='Search movies' />
            </div>
            <div className="row">
              <div className="col-xl-9 col-md-6 col-lg-8 col-sm-12 col-12" align="center">
                <MoviesList />
                <div className="row">
                  <Pagination />
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-12 col-12" >
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
