import React, { useState, useEffect } from "react";

const FindMovie = () => {
  const [MovieTitle, setMovieTitle] = useState("IronMan");
  const [movieData, setMovieData] = useState([]); 
  const [isClicked, setIsClicked] = useState(false);
  

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?s=${MovieTitle}&apikey=ae1ec7a0`
    )
      .then((Response) => Response.json())
      .then((movieData) => {
        console.log(movieData.Search);
        const arrayData = movieData.Search;
        setMovieData(arrayData);
      });
  },[MovieTitle,isClicked]);

  return (
    <div>
      <div className="hook">
      <h1>HOOKED </h1></div>
      <div className="header">
        <input
          type="text"
          onChange={(e) => {
            setMovieTitle(e.target.value);
          }}
          placeholder="Find your movie"
        ></input>
        <button
          onClick={() => {
            setIsClicked((prevState) => !prevState);
          }}
        >
          Search
        </button>
      </div>
      <div className="display">
        {movieData.map((item, i) => {
          return (
            <div key={i} className="cards">
              <img src={item.Poster} className="images" alt="movie" /> <br />
              <h4>{item.Title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindMovie;

