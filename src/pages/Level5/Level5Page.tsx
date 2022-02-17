import { useState } from "react";
import Input from "../../components/Input/Input";
import Level5 from "../../components/Level5/Level5";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import data from "../../data/data.json";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setScorePoints } from "../../redux/actions";
import CompletedPopup from "../../components/CompletedPopUp/CompletedPopup";
import { useNavigate } from "react-router-dom";

export default function Level5Page() {
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
    navigate("/select/level6");
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={5} />
      </div>

      <div>
        <Level5 />
      </div>

      <div>
        <Input
          solution={objData.solutions.solution5}
          level={5}
          toggleAddScore={toggleAddScore}
        />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={5}
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
