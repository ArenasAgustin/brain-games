import { useEffect, useState } from "react";
import StateInterface from "../../interfaces/stateInterface";
import { setLevelsArr } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import "./Level16.scss";

export default function Level16({
  toggleAddScore,
}: {
  toggleAddScore: () => void;
}) {
  const levelsArr = useAppSelector((state: StateInterface) => state.levelsArr);
  const dispatch = useAppDispatch();

  const [solution, setSolution] = useState([0, 0, 0, 0]);
  const [auxLevelsArr, setAuxLevelsArr] = useState(levelsArr);

  const handleClick = (index: number) => {
    const newSolution = [...solution];

    newSolution[index] = newSolution[index] === 0 ? 1 : 0;
    newSolution[index + 1] = newSolution[index + 1] === 0 ? 1 : 0;
    newSolution[index - 1] = newSolution[index - 1] === 0 ? 1 : 0;

    setSolution(newSolution);
  };

  const handleSubmit = () => {
    if (solution.join("") === "0101") {
      let newLevelsArr = [...auxLevelsArr];
      newLevelsArr[15] = true;

      dispatch(setLevelsArr(newLevelsArr));
      toggleAddScore();
    }
  };

  useEffect(() => {
    setAuxLevelsArr(levelsArr);
  }, [levelsArr]);

  useEffect(() => {
    handleSubmit();
  }, [solution]);

  return (
    <div className="level16__container">
      <div className="level16__puzzle">
        <div onClick={() => handleClick(0)} className="level16__puzzle-item">
          <div className="level16__puzzle-button">{solution[0]}</div>
          <div className="level16__puzzle-button-color level16__puzzle-button-color-red"></div>
        </div>

        <div onClick={() => handleClick(1)} className="level16__puzzle-item">
          <div className="level16__puzzle-button">{solution[1]}</div>
          <div className="level16__puzzle-button-color level16__puzzle-button-color-green"></div>
        </div>

        <div onClick={() => handleClick(2)} className="level16__puzzle-item">
          <div className="level16__puzzle-button">{solution[2]}</div>
          <div className="level16__puzzle-button-color level16__puzzle-button-color-red"></div>
        </div>

        <div onClick={() => handleClick(3)} className="level16__puzzle-item">
          <div className="level16__puzzle-button">{solution[3]}</div>
          <div className="level16__puzzle-button-color level16__puzzle-button-color-green"></div>
        </div>
      </div>
    </div>
  );
}
