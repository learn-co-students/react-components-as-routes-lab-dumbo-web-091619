import React from "react";
import { actors } from "../data";

const Actors = () => {
  const mapActors = () => {
    return actors.map((actor, idx) => {
      return (
        <div key={idx}>
          <h2>Actor Name:{actor.name}</h2>
          Actor Movies:
          <ul>
            {actor.movies.map((movie, idx) => {
              return <li key={idx}>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Actors Page</h1>
      {mapActors()}
    </div>
  );
};

export default Actors;
