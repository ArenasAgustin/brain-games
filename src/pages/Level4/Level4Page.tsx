import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level4 from "../../components/Level4/Level4";
import NavBar from "../../components/NavBar/NavBar";

export default function Level2Page() {
  return (
    <div>
      <div>
        <NavBar />
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
