import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level8 from "../../components/Level8/Level8";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level8Page() {
  const [isOpen, setShowClue] = useState(false);

  const toggleOpenClue = () => {
    setShowClue((prev) => !prev);
  };

  const objData = JSON.parse(JSON.stringify(data));

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} />
      </div>

      <div>
        <Level8 />
      </div>

      <div>
        <Input solution={objData.solutions.solution1} level={8} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={8}/>
      </div>
    </div>
  );
}
