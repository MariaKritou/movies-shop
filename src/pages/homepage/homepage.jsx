import React, { Children, useContext } from 'react';
import Layout from '../../components/layout/layout';
import Pagination from '../../components/pagination/pagination';
import { MovieDetailsModal } from '../../modals/movie-details';
import { MoviesList } from '../../components/movie-list/movie-list';
import { Cart } from '../../components/cart/cart';
import { Search } from '../../components/search-box/search-box';
import { ToastContainer } from 'react-toastify';
import { MovieContext } from '../../contexts/movie-context';
import 'react-toastify/dist/ReactToastify.css';
import './homepage.css';


export const HomePage = () => {

    const ctx = useContext(MovieContext);

    //go to the top of the page
    function handleScroll() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    //prevent scrolling when modal is open
    ctx.modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

    return (
        <Layout children={Children}>
            <ToastContainer />
            <div className="App container-fluid">
                {ctx.modal && (<MovieDetailsModal />)}
                <div className="row">
                    <Search placeholder='Search movies' />
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-4 col-sm-4 col-12 order-sm-2 " >
                        <Cart />
                    </div>
                    <div className="col-xl-9 col-md-6 col-lg-8 col-sm-8 col-12 order-sm-1" align="center">
                        <MoviesList />
                    </div>
                </div>
                <div className="row ">
                    <div className='d-flex align-items-class'>
                        <Pagination />
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <a href='/#' onClick={handleScroll}>Scroll to Top</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
