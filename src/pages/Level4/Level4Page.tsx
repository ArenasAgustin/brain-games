import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level4 from "../../components/Level4/Level4";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level4Page() {
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
        <Level4 />
      </div>

      <div>
        <Input solution={objData.solutions.solution4} level={4} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={4}/>
      </div>
    </div>
  );
}
