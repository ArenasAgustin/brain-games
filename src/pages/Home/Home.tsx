import React from "react";
import { NavLink } from "react-router-dom";
import './Home.scss';

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__button-container">
        <NavLink className="home__button" to={`select`}>
          <p className="home__button-text">Elegir nivel</p>
        </NavLink>
      </div>
    </div>
  );
}
