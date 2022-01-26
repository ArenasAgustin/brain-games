import React from "react";
import Input from "../../components/Input/Input";
import Level8 from "../../components/Level8/Level8";
import NavBar from "../../components/NavBar/NavBar";

export default function Level8Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level8 />
      </div>

      <div>
        <Input solution="arcoiris" level={8} />
      </div>
    </div>
  );
}
