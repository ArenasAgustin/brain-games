import React from "react";
import LevelButtonInterface from "../../interfaces/levelButtonInterface";
import { NavLink } from "react-router-dom";
import "./ButtonLevel.scss";

export default function ButtonLevel({
  level,
  isCompleted,
}: LevelButtonInterface) {
  return (
    <NavLink className="button-level__button" to={`level${level}`}>
      <div className={`button-level ${isCompleted ? "completed" : ""}`}>
        <p className="button-level__text">Nivel {level}</p>
      </div>
    </NavLink>
  );
}
