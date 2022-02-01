import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level7 from "../../components/Level7/Level7";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level7Page() {
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
        <Level7 />
      </div>

      <div>
        <Input solution={objData.solutions.solution7} level={7} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={7}/>
      </div>
    </div>
  );
}
