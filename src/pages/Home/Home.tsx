import React from "react";
import { NavLink } from "react-router-dom";
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="button-home">
        <NavLink className="button-home__button" to={`select`}>
          <p className="button-home__text">Elegir nivel</p>
        </NavLink>
      </div>
    </div>
  );
}
