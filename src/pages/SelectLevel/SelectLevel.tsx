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
    <div>
      <div className="div-button">
        <NavLink className="button" to="/">
          <p className="button-text">Menu</p>
        </NavLink>
      </div>

      <div className="select-level">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level, index) => (
          <ButtonLevel level={level} key={level} isCompleted={levels[index]}/>
        ))}
      </div>
    </div>
  );
}
