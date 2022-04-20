import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ButtonLevel from "../../components/ButtonLevel/ButtonLevel";
import StateInterface from "../../interfaces/stateInterface";
import data from "../../data/data.json";
import "./SelectLevel.scss";

export default function SelectLevel() {
  const objData = JSON.parse(JSON.stringify(data));

  const levelsArr = useSelector((state: StateInterface) => state.levelsArr);

  const [levels, setLevels] = useState(levelsArr);

  useEffect(() => {
    setLevels(levelsArr);
  }, [levelsArr]);

  return (
    <div className="select-level__container">
      <nav className="select-level__nav">
        <NavLink className="select-level__button" to="/">
          <div className="select-level__div-button">
            <p className="select-level__button-text">Menu</p>
          </div>
        </NavLink>

        <NavLink className="select-level__button" to="/scores">
          <div className="select-level__div-button">
            <p className="select-level__button-text">Puntaje</p>
          </div>
        </NavLink>
      </nav>

      <div className="select-level__levels">
        {objData.levels.map((level: any, index: any) => (
          <ButtonLevel level={level} key={level} isCompleted={levels[index]} />
        ))}
      </div>
    </div>
  );
}
