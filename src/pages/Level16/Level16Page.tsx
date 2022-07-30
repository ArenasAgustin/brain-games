import { useState } from "react";
import Level16 from "../../components/Level16/Level16";
import NavBar from "../../components/NavBar/NavBar";
import TipPopup from "../../components/TipPopup/TipPopup";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setScorePoints } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import CompletedPopup from "../../components/CompletedPopUp/CompletedPopup";

export default function Level16Page() {
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
    navigate("/scores");
  };

  return (
    <div>
      <div>
        <NavBar toggleOpenClue={toggleOpenClue} level={16} />
      </div>

      <div>
        <Level16 toggleAddScore={toggleAddScore} />
      </div>

      <div>
        <TipPopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          level={16}
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
