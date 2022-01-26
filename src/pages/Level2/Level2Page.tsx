import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level2 from "../../components/Level2/Level2";
import NavBar from "../../components/NavBar/NavBar";

export default function Level2Page() {
  return (
    <div>
      <div>
        <NavBar />
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
