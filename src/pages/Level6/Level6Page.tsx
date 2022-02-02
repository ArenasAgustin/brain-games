import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level6 from "../../components/Level6/Level6";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level6Page() {
  const [isOpen, setShowClue] = useState(false);

  const toggleOpenClue = () => {
    setShowClue((prev) => !prev);
  };
  
  const objData = JSON.parse(JSON.stringify(data));

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={6} />
      </div>

      <div>
        <Level6 />
      </div>

      <div>
        <Input solution={objData.solutions.solution6} level={6} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={6}/>
      </div>
    </div>
  );
}
