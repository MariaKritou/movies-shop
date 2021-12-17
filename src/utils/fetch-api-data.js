import axios from 'axios';

const apiKey = process.env.REACT_APP_API;
let paginatedMovies = [];
let searchedMovies = [];
let totalPages = 0;

const functions = {

    async fetchPopularMovies() {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
            const moviesFetched = res.data;
            return await moviesFetched.results;
        } catch (error) {
            console.log(error);
        }
    },

    async fetchSearchedMovies(searchkey) {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchkey}`);
            const data = await res.data;
            searchedMovies = data.results;
            totalPages = data.total_pages;
            return [searchedMovies, totalPages];
        } catch (error) {
            console.log(error);
        }
    },

    async fetchPaginatedMovies(searchkey, pageNumber) {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchkey}&page=${pageNumber}`);
            const data = await res.data;
            paginatedMovies = data.results;
            return paginatedMovies;
        } catch (error) {
            console.log(error);
        }
    }
}
export default functions;
