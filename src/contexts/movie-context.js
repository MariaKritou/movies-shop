import React, { useState, useEffect, createContext } from 'react';
import functions from '../utils/fetch-data';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [sortType, setSortType] = useState('vote_average');

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
    setSearchField(e.target.value);

    //If user types 3 or more letters start the search 
    let searchValue = e.target.value;
    if (searchValue.length > 2) {
      (async () => {
        const damnMovies = await functions.fetchSearchedMovies(searchValue);
        setMovies(damnMovies[0]);
        setTotalPages(damnMovies[1]);
      })()
    }
  }

  //----------HANDLE EVENTS END---------------------------


  const movieCtx = {
    movies, setMovies, handleSearchChange,
    searchField, pages: totalPages,
    currentPage, handleSortingChange,
    nextPage, sortType
  };

  return (
    <MovieContext.Provider value={movieCtx}>
      {props.children}
    </MovieContext.Provider>
  );
};
