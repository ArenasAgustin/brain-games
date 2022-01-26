import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level2 from '../../components/Level2/Level2';
import './Level2Page.scss';

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
        <Level2 />
      </div>

      <div>
        <Input solution="encriptar" level={2} />
      </div>
    </div>
  );
}
