import LevelButtonInterface from "../../interfaces/levelButtonInterface";
import { NavLink } from "react-router-dom";
import "./ButtonLevel.scss";

export default function ButtonLevel({
  level = 0,
  isCompleted = false,
  isSecret = false,
}: LevelButtonInterface) {
  return (
    <NavLink
      className="button-level__button"
      to={isSecret ? `secret` : `level${level}`}
    >
      <div className={`button-level ${isCompleted ? "completed" : ""}`}>
        <p className="button-level__text">
          {isSecret ? `?????` : `Nivel ${level}`}
        </p>
      </div>
    </NavLink>
  );
}
