import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level6 from "../../components/Level6/Level6";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";

export default function Level6Page() {
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
        <Level6 />
      </div>

      <div>
        <Input solution="enigma" level={6} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} />
      </div>
    </div>
  );
}
