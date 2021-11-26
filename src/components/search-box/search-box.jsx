import react from "react";
import './search-box.styles.css';

export const Search = () => (

    <div className="row search-row">
        <div className="col-sm-8">
            <div className="form-group">
            <input 
                className='search form-control input-group'
                type='search' 
                placeholder="Search Movie by Title..."/>

            </div>
        </div>
        <div className="col-sm-4">
            <div className="form-group">
                <select className="form-select select-box">
                <option className="rating">Rating</option>
                <option className="popularity">Popularity</option>
                </select>
            </div>
        </div>
    </div>
);