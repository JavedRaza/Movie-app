 import React from 'react';
 import './Styles/App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import MovieList from './Components/movieList'

function App() {
  const [movie , setMovie] =React.useState([
    {
      "Title": "Star Wars: Empire at War",
      "Year": "2006",
      "imdbID": "tt0804909",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGRiMDllMDUtOWFkZS00MGIyLWFkOTQtZjY2ZGUyNzY5YWRiXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars Empire at War: Forces of Corruption",
      "Year": "2006",
      "imdbID": "tt0879261",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGIxYTZiMmQtYjYzMS00ZmExLTljZDktMjE1ODY5OTJlYjlmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
  },
  {
      "Title": "Star Trek: Enterprise - In a Time of War",
      "Year": "2014",
      "imdbID": "tt3445408",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NDA4MzUwM15BMl5BanBnXkFtZTgwMTg3NjY5MDE@._V1_SX300.jpg"
  },
  {
      "Title": "Star Trek: Starfleet Command: Volume II: Empires at War",
      "Year": "2000",
      "imdbID": "tt0272306",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiYjQxZDQtOWM5NS00ZDZhLWJkYTUtNjQ3ZjdiMzM1MDYyXkEyXkFqcGdeQXVyMzMxNDQ0NQ@@._V1_SX300.jpg"
  }
  ])
  //   const MovieList = async() =>{
  //         const url = `http://www.omdbapi.com/?s=star war&apikey=a8c756b4`;
  //         await fetch(url);
  //         await response 
  //         setMovie(res)
  //   }
  //  React.useEffect(()=>{

  //  } , [])
  return (
    <div className="App">
        <MovieList movies ={movie} />   
    </div>
  );
}

export default App;
