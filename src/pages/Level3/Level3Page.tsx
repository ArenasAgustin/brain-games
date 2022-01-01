import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level3 from "../../components/Level3/Level3";

export default function Level2Page() {
  return (
    <div>
      <div>
        <NavLink to="/">Menu</NavLink>
      </div>

      <div>
        <NavLink to="/select">Niveles</NavLink>
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
