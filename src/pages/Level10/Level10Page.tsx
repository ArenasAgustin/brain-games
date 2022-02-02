import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Level10 from "../../components/Level10/Level10";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setScorePoints } from "../../redux/actions";

export default function Level10Page() {
  const objData = JSON.parse(JSON.stringify(data));

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
    dispatch(setScorePoints(points));
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={10} />
      </div>

      <div>
        <Level10 />
      </div>

      <div>
        <Input
          solution={objData.solutions.solution10}
          level={10}
          toggleAddScore={toggleAddScore}
        />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={10}
          toggleSubtractScore={toggleSubtractScore}
        />
      </div>
    </div>
  );
}
