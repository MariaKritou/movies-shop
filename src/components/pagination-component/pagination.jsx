import React from "react";
import './pagination.styles.css';

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage == i ? 'active' : '';

        pageLinks.push(<li className={`page-item bg-dark ${active}`} key={i} 
            onClick={() => props.nextPage(i)}
        >
            <a href='#' className='page-link bg-dark'>{i}</a>
        </li>)
        
    }

    return (
            <div className="row">
                <ul className="pagination">
                    { pageLinks}
                </ul>
            </div>
    )
}

export default Pagination;