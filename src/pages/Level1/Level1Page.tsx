import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level1 from "../../components/Level1/Level1";

export default function Level1Page() {
  return (
    <div>
      <div>
        <NavLink to="/">Menu</NavLink>
      </div>

      <div>
        <NavLink to="/select">Niveles</NavLink>
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
