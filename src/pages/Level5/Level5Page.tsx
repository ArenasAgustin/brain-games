import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import Level5 from "../../components/Level5/Level5";
import NavBar from "../../components/NavBar/NavBar";

export default function Level5Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level5 />
      </div>

      <div>
        <Input solution="3322136435712447611171364" level={5} />
      </div>
    </div>
  );
}
