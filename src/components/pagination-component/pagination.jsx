import React from "react";
import './pagination.styles.css';

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {

        //The page we are currently should have the active class - for visibility
        let active = props.currentPage === i ? 'active' : '';

        //Fill the array with all the pages that will appear as list items
        pageLinks.push(
        <li className={`page-item bg-dark ${active}`} key={i} 
            onClick={() => props.nextPage(i)}
        >
            <a href='#' className='page-link bg-dark'>{i}</a>
        </li>)
    }

    return (
            <div className="row">
                <ul className="pagination">
                    {pageLinks}
                </ul>
            </div>
    )
}

export default Pagination;