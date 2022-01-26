import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level1 from "../../components/Level1/Level1";
import './Level1Page.scss';

export default function Level1Page() {
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
        <Level1 />
      </div>

      <div>
        <Input solution="descifrar" level={1} />
      </div>
    </div>
  );
}
