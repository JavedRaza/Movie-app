 import React from 'react';
 import './Styles/App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import MovieList from './Components/movieList';
 import Heading from './Components/movieHeading';
 import MovieSearch from './Components/movieSearch';

function App() {
  const [movies , setMovies] =React.useState([]);
  const [searchValue,setSearchValue] = React.useState("");
    const MovieRequest = async(searchValue) =>{
          const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a8c756b4`;
          const response=await fetch(url);
          const jres = await response.json();
          if(jres.Search)
             setMovies(jres.Search);
    }
   React.useEffect(()=>{
         MovieRequest(searchValue);
   } , [searchValue])
  return (
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4">
     <Heading heading="Movies that you searched........"/> 
     <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}/> 
    </div>
    <div className="row"  >
          <MovieList movies ={movies} />   
    </div>      
    </div>
  );
}

export default App;
