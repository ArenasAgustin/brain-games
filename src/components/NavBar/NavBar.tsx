import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav__container">
      <NavLink className="nav__button" to="/">
        <div className="nav__div-button">
          <p className="nav__button-text">Menu</p>
        </div>
      </NavLink>

      <NavLink className="nav__button" to="/select">
        <div className="nav__div-button">
          <p className="nav__button-text">Niveles</p>
        </div>
      </NavLink>
    </div>
  );
}
