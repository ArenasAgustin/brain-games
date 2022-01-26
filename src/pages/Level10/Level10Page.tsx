import React from "react";
import Input from "../../components/Input/Input";
import Level10 from "../../components/Level10/Level10";
import NavBar from "../../components/NavBar/NavBar";

export default function Level10Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level10 />
      </div>

      <div>
        <Input solution="ascii" level={10} />
      </div>
    </div>
  );
}
