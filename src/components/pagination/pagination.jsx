import React, { useContext } from "react";
import { MovieContext } from "../../contexts/movie-context";
import './pagination.styles.css';

const Pagination = (props) => {
    const ctx = useContext(MovieContext);
    const pageLinks = [];

    for (let i = 1; i <= ctx.pages; i++) {

        console.log(ctx.pages);
        //The page we are currently should have the active class - for visibility
        let active = ctx.currentPage === i ? 'active' : '';

        //Fill the array with all the pages that will appear as list items
        pageLinks.push(
            <li className={`page-item bg-dark ${active}`} key={i}
                onClick={() => ctx.nextPage(i)}
            >
                <a href='/#' className='page-link bg-dark'>{i}</a>
            </li>)
    }

    return (
       
            <ul className="pagination">
                {ctx.currentPage > 1 ?
                    <li className={`page-item bg-dark`} onClick={() => ctx.nextPage(ctx.currentPage)}>
                        <a href='/#' className='page-link bg-dark'>Prev</a>
                    </li> : ''}
                {pageLinks.length > 5 ? <h5 className='text-white pt-2 spaces'>{ctx.currentPage}/{ctx.pages}</h5> : pageLinks}
                {ctx.currentPage < ctx.pages ?
                    <li className={`page-item bg-dark`} onClick={() => ctx.nextPage(ctx.currentPage + 1)}>
                        <a href='/#' className='page-link bg-dark'>Next</a>
                    </li> : ''}
            </ul>
       
    )
}

export default Pagination;