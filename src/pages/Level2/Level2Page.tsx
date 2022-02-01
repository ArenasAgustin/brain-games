import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level2 from "../../components/Level2/Level2";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level2Page() {
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
        <Level2 />
      </div>

      <div>
        <Input solution={objData.solutions.solution2} level={2} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={2}/>
      </div>
    </div>
  );
}
