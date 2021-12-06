import { MoviesList } from './components/movie-list/movie-list';
import { Cart } from './components/cart-component/cart';
import { Search } from './components/search-box/search-box';
import React, { useState, useEffect, Children } from 'react';
import Layout from './components/layout-component/layout';
import Pagination from './components/pagination-component/pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [searchField, setSearchField] = useState('');
  const [sortType, setSortType] = useState('vote_average');

  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = process.env.REACT_APP_API;


  //---------- Code Review-------------
  // Its time to use some Axios :)
  // Rethink about the spread operator..

  // Have a check to the responsiveness! When the width becomes smaller
  // bring the cart div and the movies list div in column layout!
  //---------- End Code Review-------------


  //Due to a console warning for empty dependency we have to add the eslint-disable line as a comment
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //---------------FETCH MOVIES START--------------------------

  //Get popular movies and sort them with vote_average
  function fetchData() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => res.json())
        .then(moviesFetched => {
          setMovies([...moviesFetched.results.sort(((a, b) => b[sortType] - a[sortType]))]);
        });
    } catch (error) {
      console.error(error);
    }
  }

  //Get movies from search result 
  async function fetchSearchedMovies() {
    if (searchField.length >= 2) {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchField}`);
        const data = await res.json();
        setMovies([...data.results]);

        //set parameters for pagination
        setTotalResults(data.total_results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    }
  }

  //Checkout button functionality
  async function purchaseMovies() {

    const idList = []
    cartItems.forEach(movie => {
      idList.push(movie.id);
    });
    const postData = { 'data': idList}

    console.log(idList);
    try {
      const res = await fetch('https://api.mocklets.com/mock68075/', {
        method: 'post',
        headers: {
          'X-Mocklets-PublicKey': 'txmovies',
          'X-Mocklets-Checksum': '830c7cd4a70be6540a4898441ca02951'
        },
        body: JSON.stringify(postData)
      })

      const data = await res.json();
      if (data.success) {
        toast.success("Purchare successful");
        setCartItems([]);
        setTotalPrice(0);
      } else {
        toast.error("Purchase was not successful, try again");
      }

    } catch (err) {
      console.log(err);
    }
  }
  //---------------FETCH MOVIES END---------------------------

  //---------------CART FUNCTIONALITY START-------------------

  const onAdd = (movie) => {
    const exists = cartItems.find(x => x.id === movie.id);

    //If a movie is already in the cart then just increase its quantity 
    if (exists) {
      setCartItems(cartItems.map((x) =>
        x.id === movie.id ? { ...exists, quantity: exists.quantity + 1 } : x));
    }
    //Otherwise put the movie in the cart and its quantity will be 1 
    else {
      setCartItems([...cartItems, { ...movie, quantity: 1 }])
    }
    //Increase the total price when adding a movie in cart
    setTotalPrice(totalPrice + 10);
  }

  const onRemove = (movie) => {
    const exists = cartItems.find(x => x.id === movie.id);

    //If the movie is in the cart and its only one then filter it out
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== movie.id));
    }
    //Otherwise decrease the movie's quantity by one
    else {
      setCartItems(cartItems.map((x) =>
        x.id === movie.id ? { ...exists, quantity: exists.quantity - 1 } : x));
    }
    //Also remove the price from total
    setTotalPrice(totalPrice - 10);
  }

  //---------------CART FUNCTIONALITY END-----------------------


  //---------------PAGINATION FUNCTIONALITY START---------------

  //Get the movies from a specific page of the API
  async function paginationMovies(pageNumber) {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchField}&page=${pageNumber}`);
      const data = await res.json();
      setMovies([...data.results]);
    } catch (err) {
      console.error(err);
    }
  }

  //Set the page number 
  const nextPage = (pageNumber) => {
    paginationMovies(pageNumber);
    setCurrentPage(pageNumber);
  }
  //---------------PAGINATION FUNCTIONALITY END-----------------

  //---------------EVENT HANDLERS START-------------------------

  //Handle the onChange event for the search input
  const handleSearchChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
    fetchSearchedMovies();
  }

  //Handle the onChange event for the select option
  const handleSortingChange = e => {
    e.preventDefault();
    //get the selected option - sort the movies in a copy and then set it
    const sortingOption = e.target.value;
    const sortedMovies = [...movies].sort((a, b) => b[sortingOption] - a[sortingOption]);

    //update the values
    setSortType(e.target.value);
    setMovies(sortedMovies);
  }
  //---------------EVENT HANDLERS END---------------------------


  return (
    <Layout countCartItems={cartItems.length} children={Children}>
     <ToastContainer />
      <div className="App">
        <div className="row">
          <Search
            placeholder='Search movies'
            handleSearchChange={handleSearchChange}
            handleSortingChange={handleSortingChange}
            sortValue={sortType}
          />
        </div>
        <div className="row">
          <div className="col-9">
            {movies.length === 0 ? <p className='text-white'>No movies found!</p> : <MoviesList movies={movies} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />}
            {totalResults > 20 ? <Pagination pages={totalPages} nextPage={nextPage} currentPage={currentPage} /> : ''}
          </div>
          <div className="col-3">
            <Cart
              cartItems={cartItems}
              totalPrice={totalPrice}
              onAdd={onAdd}
              onRemove={onRemove}
              purchaseMovies={purchaseMovies}
            />
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default App;
