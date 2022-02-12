import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StateInterface from "../../interfaces/stateInterface";
import "./NavBar.scss";

export default function NavBar({
  toggleOpenClue,
  level,
}: {
  toggleOpenClue?: () => void;
  level: number;
}) {
  const scorePoints = useSelector((state: StateInterface) => state.scorePoints);

  const [sPoints, setSPoints] = useState(scorePoints);

  useEffect(() => {
    setSPoints(scorePoints);
  }, [scorePoints]);

  return (
    <div className="nav__container">
      <div className="nav__links-container">
        <NavLink className="nav__button" to="/select">
          <div className="nav__div-button">
            <p className="nav__button-text">Niveles</p>
          </div>
        </NavLink>
      </div>

      <div className="nav__txt-container">
        <div className="nav__level">
          <p className="nav__level-text">Nivel: {level}</p>
        </div>

        <div className="nav__score">
          <span className="nav__score-points">Puntos: {sPoints}</span>
        </div>
      </div>

      <div className="nav__tips-container">
        <span className="nav__score-points">Puntos: {sPoints}</span>
        <button
          className="nav__button nav__div-button"
          onClick={toggleOpenClue}
        >
          <p className="nav__button-text">Pistas</p>
        </button>
      </div>
    </div>
  );
}
