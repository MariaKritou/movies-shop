import React, { useState, useEffect, createContext } from 'react';
import functions from '../utils/fetch-api-data';
import debounce from 'lodash.debounce';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [sortType, setSortType] = useState('vote_average');

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [modal, setModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  //Due to a console warning for empty dependency we have to add the eslint-disable line as a comment
  //Console also warns to NOT use the whole useEffect as async but make an async function inside
  useEffect(() => {

    (async () => {
      const damnMovies = await functions.fetchPopularMovies();
      setMovies(damnMovies);
    })()

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //----------PAGINATION FUNCTIONALITY START---------------

  //Pagination
  async function paginationMovies(pageNumber) {
    const damnMovies = await functions.fetchPaginatedMovies(searchField, pageNumber);
    setMovies(damnMovies);
  }

  //Set the page number 
  const nextPage = (pageNumber) => {
    paginationMovies(pageNumber);
    setCurrentPage(pageNumber);
  }

  //----------PAGINATION FUNCTIONALITY END----------------

  //----------HANDLE EVENTS START-------------------------

  const handleSortingChange = e => {
    e.preventDefault();
    //get the selected option - sort the movies in a copy and then set it
    const sortingOption = e.target.value;
    const sortedMovies = movies.sort((a, b) => b[sortingOption] - a[sortingOption]);

    //update the values
    setSortType(e.target.value);
    setMovies(sortedMovies);
  }

  const handleSearchChange = e => {
    e.preventDefault();
    
    let searchValue = e.target.value;
    setSearchField(searchValue);

    //If the user erases the search field then show popular movies
    //If user types 3 or more letters start the search 
    if (searchValue.length === 0) {
      (async () => {
        setTotalPages(0);
        setCurrentPage(1);
        const damnMovies = await functions.fetchPopularMovies();
        setMovies(damnMovies);
      })()
    } else if (searchValue.length > 2) {
      (async () => {
        const damnMovies = await functions.fetchSearchedMovies(searchValue);
        setMovies(damnMovies[0]);
        setCurrentPage(1);
        setTotalPages(damnMovies[1]);
      })()
    } else return;

  }

  //Lodash library - debounce will wait X mseconds before calling the event
  //While user types, onChange will not be called after each letter but after 3 ms
  const debounceOnChange = debounce(handleSearchChange, 300);

  const handleModal = (clickedMovie) => {
    setModal(!modal);
    setMovieDetails(clickedMovie);
  }

  //----------HANDLE EVENTS END---------------------------


  const movieCtx = {
    movies, setMovies, handleSearchChange,
    searchField, pages: totalPages,
    currentPage, handleSortingChange,
    nextPage, sortType, modal, setModal,
    movieDetails, handleModal, debounceOnChange
  };

  return (
    <MovieContext.Provider value={movieCtx}>
      {props.children}
    </MovieContext.Provider>
  );
};
