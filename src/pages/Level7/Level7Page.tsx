import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level7 from "../../components/Level7/Level7";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";

export default function Level7Page() {
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
        <Level7 />
      </div>

      <div>
        <Input solution="juegos" level={7} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} />
      </div>
    </div>
  );
}
