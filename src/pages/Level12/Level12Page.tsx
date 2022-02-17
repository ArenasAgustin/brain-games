import { useState } from "react";
import Input from "../../components/Input/Input";
import Level12 from "../../components/Level12/Level12";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setScorePoints } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import CompletedPopup from "../../components/CompletedPopUp/CompletedPopup";

export default function Level12Page() {
  const objData = JSON.parse(JSON.stringify(data));

  const [isCompleted, setIsCompleted] = useState(false);
  const [isCompletedOneTime, setIsCompletedOneTime] = useState(false);
  const [isOpen, setShowClue] = useState(false);
  const [points, setPoints] = useState(100);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      if (!isCompletedOneTime) {
        setIsCompletedOneTime(true);
        dispatch(setScorePoints(points));
      }
    }
  };

  const handleNavigate = () => {
    navigate("/select/level13");
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={12} />
      </div>

      <div>
        <Level12 />
      </div>

      <div>
        <Input
          solution={objData.solutions.solution12}
          level={12}
          toggleAddScore={toggleAddScore}
        />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={12}
          toggleSubtractScore={toggleSubtractScore}
        />
      </div>

      <div>
        <CompletedPopup
          isCompleted={isCompleted}
          handleNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
