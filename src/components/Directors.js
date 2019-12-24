import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            <h3>Director: {director.name}</h3>
            <h4>Movies:</h4>
            <ul>
              {director.movies.map((movie, idx) => {
                return <li key={idx}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
