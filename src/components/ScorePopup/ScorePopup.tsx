import axios from "axios";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import data from "../../data/data.json";
import "./ScorePopup.scss";

const { REACT_APP_API_URL } = process.env;

export default function ScorePopup({
  isOpen,
  toggleOpenClue,
  points,
}: {
  isOpen: boolean;
  toggleOpenClue: () => void;
  points: number;
}) {
  const [name, setName] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(REACT_APP_API_URL ? REACT_APP_API_URL : "", {
      name,
      scorePoints: points,
    });
    console.log(res);
    toggleOpenClue();
  };

  return (
    <>
      {isOpen && (
        <div className="score__wrapper-div">
          <div className="score__window">
            <div className="score__button-close">
              <button
                className="score__button-close-button"
                onClick={toggleOpenClue}
              >
                <IoCloseSharp />
              </button>
            </div>

            <div className="score__header">
              <h1>Guardar Puntaje</h1>
            </div>

            <form className="score__body" onSubmit={onSubmit}>
              <label className="score__label">Nombre</label>

              <input
                className="score__input"
                type="text"
                placeholder="Nombre"
                onChange={onChange}
              />

              <label className="score__label">Puntos: {points}</label>

              <button className="nav__button" type="submit">
                <div className="nav__div-button">
                  <p className="nav__button-text">Guardar</p>
                </div>
              </button>
            </form>
          </div>

          <div
            className="score__window-background"
            onClick={toggleOpenClue}
          ></div>
        </div>
      )}
    </>
  );
}
