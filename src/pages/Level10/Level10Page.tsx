import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level10 from "../../components/Level10/Level10";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";

export default function Level10Page() {
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
        <Level10 />
      </div>

      <div>
        <Input solution="polybius" level={10} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} />
      </div>
    </div>
  );
}
