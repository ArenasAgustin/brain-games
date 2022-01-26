import React from "react";
import Input from "../../components/Input/Input";
import Level6 from "../../components/Level6/Level6";
import NavBar from "../../components/NavBar/NavBar";

export default function Level6Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level6 />
      </div>

      <div>
        <Input solution="enigma" level={6} />
      </div>
    </div>
  );
}
