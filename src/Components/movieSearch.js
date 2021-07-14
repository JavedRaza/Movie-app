import React from 'react';

const MovieSearch = (props) =>{
    return(
        <div className="col col-sm-4">
            <input
            className="form-control"
            value={props.value}
            onChange={(e)=> props.setSearchValue(e.target.value)}
            placeholder="Enter Movie Name to Search......"
            />
            
            </div>
    )
}

export default MovieSearch;