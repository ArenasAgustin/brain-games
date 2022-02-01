import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level9 from "../../components/Level9/Level9";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";

export default function Level9Page() {
  const [isOpen, setShowClue] = useState(false);

  const toggleOpenClue = () => {
    setShowClue((prev) => !prev);
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} />
      </div>

      <div>
        <Level9 />
      </div>

      <div>
        <Input solution="ascii" level={9} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} />
      </div>
    </div>
  );
}
