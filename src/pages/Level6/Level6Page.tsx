import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level6 from "../../components/Level6/Level6";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setScorePoints } from "../../redux/actions";

export default function Level6Page() {
  const objData = JSON.parse(JSON.stringify(data));

  const [isCompleted, setIsCompleted] = useState(false);
  const [isOpen, setShowClue] = useState(false);
  const [points, setPoints] = useState(100);

  const dispatch = useAppDispatch();

  const toggleOpenClue = () => {
    setShowClue((prev) => !prev);
  };

  const toggleSubtractScore = (index: number) => {
    if (index === 0 && points === 100) setPoints(75);
    else if (index === 1 && points === 75) setPoints(50);
    else if (index === 2 && points === 50) setPoints(25);
  };

  const toggleAddScore = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      dispatch(setScorePoints(points));
    }
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={6} />
      </div>

      <div>
        <Level6 />
      </div>

      <div>
        <Input
          solution={objData.solutions.solution6}
          level={6}
          toggleAddScore={toggleAddScore}
        />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={6}
          toggleSubtractScore={toggleSubtractScore}
        />
      </div>
    </div>
  );
}
