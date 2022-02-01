import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level1 from "../../components/Level1/Level1";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level1Page() {
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
        <Level1 />
      </div>

      <div>
        <Input solution={objData.solutions.solution1} level={1} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={1}/>
      </div>
    </div>
  );
}
