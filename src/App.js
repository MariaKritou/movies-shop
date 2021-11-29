import {MoviesList} from './components/movie-list/movie-list';
import {Cart} from './components/cart-component/cart';
import {Search} from './components/search-box/search-box';
import React, { useState, useEffect } from 'react';
import Layout from './components/layout-component/layout';
import Pagination from './components/pagination-component/pagination';
import './App.css'

function App() {
    const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState('');   
    const [filteredMovies, setFiltered] = useState([]);

    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

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

    async function fetchSearchedMovies() {

      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchField}`);
        const data  = await res.json();
        setMovies([...data.results]); 
        setTotalResults(data.total_results);
        setTotalPages(data.total_pages);
        console.log(data);
      }catch(err){
        console.error(err);
        }
    }

    const handleChange = e => {
      e.preventDefault();
      setSearchField(e.target.value);
      fetchSearchedMovies();
      console.log(filteredMovies);
    }
   
    async function paginationMovies(pageNumber) {

      try {
        const res = await  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchField}&page=${pageNumber}`);
        console.log(pageNumber);
        const data  = await res.json();
        setMovies([...data.results]); 
        
        console.log(data);
      }catch(err){
        console.error(err);
        }

    }

     const nextPage = (pageNumber) => {

      paginationMovies(pageNumber);
      setCurrentPage(pageNumber);

    }

    return (
    <Layout>
      <div className="App">
       
          <div className="row">
            <Search 
              placeholder = 'Search movies'
              handleChange = {handleChange}
            />
          </div>
          <div className="row">
            <div className="col-9">
              {movies.length ===0 ? <p className='text-white'>No movies found!</p> : <MoviesList movies={movies} />  }
              {totalResults > 20 ? <Pagination pages={totalPages} nextPage={nextPage} currentPage={currentPage} /> : ''}
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
