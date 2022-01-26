import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level4 from "../../components/Level4/Level4";
import './Level4Page.scss';

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
        <Level4 />
      </div>

      <div>
        <Input solution="completado" level={4} />
      </div>
    </div>
  );
}
