import React from "react";
import LevelButtonInterface from "../../interfaces/levelButtonInterface";
import { NavLink } from "react-router-dom";
import "./ButtonLevel.scss";

export default function ButtonLevel({
  level,
  isCompleted,
}: LevelButtonInterface) {
  return (
    <div className={`button-level ${isCompleted ? "completed" : ""}`}>
      <NavLink className="button-level__button" to={`level${level}`}>
        <p className="button-level__text">Nivel {level}</p>
      </NavLink>
    </div>
  );
}
