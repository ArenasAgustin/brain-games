import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import Input from "../../components/Input/Input";
import Level2 from "../../components/Level2/Level2";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";
import { setScorePoints } from "../../redux/actions";

export default function Level2Page() {
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
        <NavBar toggleOpenClue={toggleOpenClue} level={2} />
      </div>

      <div>
        <Level2 />
      </div>

      <div>
        <Input
          solution={objData.solutions.solution2}
          level={2}
          toggleAddScore={toggleAddScore}
        />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={2}
          toggleSubtractScore={toggleSubtractScore}
        />
      </div>
    </div>
  );
}
