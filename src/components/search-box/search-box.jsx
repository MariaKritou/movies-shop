import './search-box.styles.css';

export const Search = ({placeholder, handleSearchChange, handleSortingChange, sortValue}) => (

    <div className="row search-row">
        <div className="col-sm-8">
            <div className="form-group">
            <input 
                className='search form-control input-group'
                type='search' 
                placeholder={placeholder} 
                onChange={handleSearchChange}
                />

            </div>
        </div>
        <div className="col-sm-4">
            <div className="form-group">
                <select 
                    className="form-select select-box"
                    type='select'
                    onChange={handleSortingChange}
                    value={sortValue}
                    >
                <option value='vote_average'>Rating</option>
                <option value='popularity'>Popularity</option>
                </select>
            </div>
        </div>
    </div>
);