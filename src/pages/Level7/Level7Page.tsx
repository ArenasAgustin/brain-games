import React from "react";
import Input from "../../components/Input/Input";
import Level7 from "../../components/Level7/Level7";
import NavBar from "../../components/NavBar/NavBar";

export default function Level7Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level7 />
      </div>

      <div>
        <Input solution="juegos" level={7} />
      </div>
    </div>
  );
}
