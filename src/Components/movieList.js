import React from 'react';


const MovieList = (props) =>{
    return (
        <>
            {props.movies.map((movie,index) => (
                <div className="image-container d-flex m-3 justify-content-start ">
                        <img src={movie.Poster} alt="Movie-Postar"></img>
                </div>
            ))}
        </>

    )
}

export default MovieList;