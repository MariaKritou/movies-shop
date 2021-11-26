import Header from './components/header-component/header';
import {MoviesList} from './components/movie-list/movie-list';
import {Cart} from './components/cart-component/cart';
import {Search} from './components/search-box/search-box';
import React, { Component } from 'react';
// Axios is not used 
import Axios from 'axios';
import './App.css'

// write component with React hook approach 
class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
    }

    this.apiKey = process.env.REACT_APP_API
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then(moviesFetched => {
      console.log(moviesFetched.results);
        this.setState({ movies: [...moviesFetched.results]}) // why use spread operator 
    });
     
  }

 render() {

    const { movies } = this.state;
    // you can create a Layout component 
    // and pass as children the dynamic content
    return (
      <div className="App">
        <Header/>
        <div className="m-5">
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
      </div>
    );
  }
}

export default App;
