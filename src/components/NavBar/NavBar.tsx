import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({
  toggleOpenClue,
}: {
  toggleOpenClue?: () => void;
}) {
  return (
    <div className="nav__container">
      <div className="nav__links-container">
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

      <div className="nav__tips-container">
        <span className="nav__score-points">Puntos: 000</span>
        <button className="nav__button nav__div-button" onClick={toggleOpenClue}>
          <p className="nav__button-text">Pistas</p>
        </button>
      </div>
    </div>
  );
}
