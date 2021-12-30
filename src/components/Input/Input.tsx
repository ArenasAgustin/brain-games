import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import InputInterface from "../../interfaces/inputInterface";
import validator from "../../utils/validator";
import "./Input.scss";
import StateInterface from "../../interfaces/stateInterface";

export default function Input({ solution, level }: InputInterface) {
  // const dispatch = useDispatch();
  const levelsArr = useSelector((state: StateInterface) => state.levelsArr);

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [auxLevelsArr, setAuxLevelsArr] = useState(levelsArr)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsValid(validator(value, solution));

    if (isValid) {
      let newLevelsArr = [...auxLevelsArr];
      newLevelsArr[level - 1] = isValid;
      setAuxLevelsArr(newLevelsArr);
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

  useEffect(() => {
    setAuxLevelsArr(levelsArr);
  }, [levelsArr]);

  return (
    <form
      className="input__container"
      onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
    >
      <div className="input__paddock">
        <div className="input__paddock-icon">
          {isValid ? <GiPadlockOpen /> : <GiPadlock />}
        </div>
      </div>
      <input
        className="input__input"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={value}
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
