import React from "react";
import './pagination.styles.css';

  //---------- Code Review-------------
// API sometimes brings pages with empty arrays and the pagination has pages
// with empty results.. have a check a think how you can improve it!
  //---------- End Code Review-------------

const Pagination = (props) => {
    const pageLinks = [];

    for (let i = 1; i <= props.pages; i++) {

        //The page we are currently should have the active class - for visibility
        let active = props.currentPage === i ? 'active' : '';

        //Fill the array with all the pages that will appear as list items
        pageLinks.push(
            <li className={`page-item bg-dark ${active}`} key={i}
                onClick={() => props.nextPage(i)}
            >
                <a href='/#' className='page-link bg-dark'>{i}</a>
            </li>)
    }

    return (
        <div className="row">
            <ul className="pagination">
                {props.currentPage > 1 ?
                 <li className={`page-item bg-dark`} onClick={() => props.nextPage(props.currentPage - 1)}>
                    <a href='/#' className='page-link bg-dark'>Prev</a>
                </li> : ''}
                {pageLinks.length >5 ? <h5 className='text-white pt-2 spaces'>{props.currentPage}/{props.pages}</h5> : pageLinks}
                {props.currentPage < props.pages ?
                 <li className={`page-item bg-dark`} onClick={() => props.nextPage(props.currentPage + 1)}>
                    <a href='/#' className='page-link bg-dark'>Next</a>
                </li> : ''}
            </ul>
        </div>
    )
}

export default Pagination;