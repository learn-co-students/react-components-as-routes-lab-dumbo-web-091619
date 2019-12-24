import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //   const link = {
  //     width: "100px",
  //     padding: "12px",
  //     margin: "0 6px 6px",
  //     background: "blue",
  //     textDecoration: "none",
  //     color: "white"
  //   };
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
