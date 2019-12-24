import React from "react";
import { movies } from "../data";

const Movies = props => {
  const mapMovies = () => {
    return movies.map((movie, ind) => {
      return (
        <div key={`${movie.title}-${ind}`}>
          <h2>Movie Title: {movie.title}</h2>
          <h3> Time: {movie.time} minutes</h3>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map((genre, idx) => {
              return <li key={idx}>{genre}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Movies Page</h1>
      {mapMovies()}
    </div>
  );
};

export default Movies;
