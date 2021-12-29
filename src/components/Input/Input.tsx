import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import InputInterface from "../../interfaces/inputInterface";
import validator from "../../utils/validator";
import "./Input.scss";

export default function Input({ solution, level }: InputInterface) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsValid(validator(value, solution));

    if (isValid) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

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
