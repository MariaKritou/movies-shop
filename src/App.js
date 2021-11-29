import {MoviesList} from './components/movie-list/movie-list';
import {Cart} from './components/cart-component/cart';
import {Search} from './components/search-box/search-box';
import React, { useState, useEffect } from 'react';
import Layout from './components/layout-component/layout';
import './App.css'

function App() {
    const [movies, setMovies] = useState([]);
    const apiKey = process.env.REACT_APP_API;

    useEffect(() => {
      fetchData();
    }, []);

    function fetchData() {

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => res.json())
      .then(moviesFetched => {
        setMovies([...moviesFetched.results]); 
    });

    }

    return (
    <Layout>
      <div className="App">
       
          <div className="row">
            <Search/>
          </div>
          <div className="row">
            <div className="col-9">
              <MoviesList movies={movies} />
            </div>
            <div className="col-3">
              <Cart/>
            </div>
          </div>
        </div>
    
      </Layout>
    );
  }

export default App;
