import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav__container">
      <div className="nav__div-button">
        <NavLink className="nav__button" to="/">
          <p className="nav__button-text">Menu</p>
        </NavLink>
      </div>

      <div className="nav__div-button">
        <NavLink className="nav__button" to="/select">
          <p className="nav__button-text">Niveles</p>
        </NavLink>
      </div>
    </div>
  );
}
