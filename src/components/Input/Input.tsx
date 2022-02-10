import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import InputInterface from "../../interfaces/inputInterface";
import validator from "../../utils/validator";
import StateInterface from "../../interfaces/stateInterface";
import { setLevelsArr, setScorePoints } from "../../redux/actions";
import "./Input.scss";

export default function Input({
  solution,
  level,
  toggleAddScore,
}: InputInterface) {
  const levelsArr = useAppSelector((state: StateInterface) => state.levelsArr);
  const dispatch = useAppDispatch();

  const [stateLocal, setStateLocal] = useState({
    value: "",
    isValid: false,
    auxLevelsArr: levelsArr,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStateLocal({
      ...stateLocal,
      value: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let isValidAux = validator(stateLocal.value, solution);

    if (isValidAux) {
      let newLevelsArr = [...stateLocal.auxLevelsArr];
      newLevelsArr[level - 1] = isValidAux;

      setStateLocal({
        ...stateLocal,
        auxLevelsArr: newLevelsArr,
        isValid: isValidAux,
      });

      dispatch(setLevelsArr(newLevelsArr));
      toggleAddScore();
    }
  };

  useEffect(() => {
    setStateLocal({
      ...stateLocal,
      auxLevelsArr: levelsArr,
    });
  }, [levelsArr]);

  return (
    <form
      className="input__container"
      onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
    >
      <div className="input__paddock">
        <div
          className={`input__paddock-icon ${
            stateLocal.auxLevelsArr[level - 1] ? "completed" : ""
          }`}
        >
          {stateLocal.auxLevelsArr[level - 1] ? (
            <GiPadlockOpen />
          ) : (
            <GiPadlock />
          )}
        </div>
      </div>
      <input
        className="input__input"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={stateLocal.value}
        placeholder="Escribir la respuesta"
      />
      <button className="input__button">
        <div className="input__button-icon">
          <IoChevronForwardSharp />
        </div>
      </button>
    </form>
  );
}
