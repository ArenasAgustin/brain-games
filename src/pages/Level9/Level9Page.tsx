import React from "react";
import Input from "../../components/Input/Input";
import Level9 from "../../components/Level9/Level9";
import NavBar from "../../components/NavBar/NavBar";

export default function Level9Page() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Level9 />
      </div>

      <div>
        <Input solution="ascii" level={9} />
      </div>
    </div>
  );
}
