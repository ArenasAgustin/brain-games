import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level5 from "../../components/Level5/Level5";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";

export default function Level5Page() {
  const [isOpen, setShowClue] = useState(false);

  const toggleOpenClue = () => {
    setShowClue((prev) => !prev);
  };
  
  const objData = JSON.parse(JSON.stringify(data));

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={5} />
      </div>

      <div>
        <Level5 />
      </div>

      <div>
        <Input solution={objData.solutions.solution5} level={5} />
      </div>

      <div>
        <TipPopup isOpen={isOpen} toggleOpenClue={toggleOpenClue} level={5}/>
      </div>
    </div>
  );
}
