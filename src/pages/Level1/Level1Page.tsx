import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level1 from "../../components/Level1/Level1";
import NavBar from "../../components/NavBar/NavBar";

export default function Level1Page() {
  return (
    <div>
      <div>
        <NavBar />
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
