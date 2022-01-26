import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level3 from "../../components/Level3/Level3";
import './Level3Page.scss';

export default function Level2Page() {
  return (
    <div>
      <div className="div-button">
        <NavLink className="button" to="/">
          <p className="button-text">Menu</p>
        </NavLink>
      </div>

      <div className="div-button">
        <NavLink className="button" to="/select">
          <p className="button-text">Niveles</p>
        </NavLink>
      </div>

      <div>
        <Level3 />
      </div>

      <div>
        <Input solution="completado" level={3} />
      </div>
    </div>
  );
}
