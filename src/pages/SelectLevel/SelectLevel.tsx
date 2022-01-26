import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ButtonLevel from "../../components/ButtonLevel/ButtonLevel";
import StateInterface from "../../interfaces/stateInterface";
import "./SelectLevel.scss";

export default function SelectLevel() {
  const levelsArr = useSelector((state: StateInterface) => state.levelsArr);

  const [levels, setLevels] = useState(levelsArr);

  useEffect(() => {
    setLevels(levelsArr);
  }, [levelsArr]);

  return (
    <div className="select-level__container">
      <nav className="select-level__nav">
        <div className="select-level__div-button">
          <NavLink className="select-level__button" to="/">
            <p className="select-level__button-text">Menu</p>
          </NavLink>
        </div>
      </nav>

      <div className="select-level__levels">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level, index) => (
          <ButtonLevel level={level} key={level} isCompleted={levels[index]} />
        ))}
      </div>
    </div>
  );
}
