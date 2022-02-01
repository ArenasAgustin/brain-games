import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./TipPopup.scss";

export default function CluePopup({
  isOpen,
  toggleOpenClue,
}: {
  isOpen: boolean;
  toggleOpenClue: () => void;
}) {
  const [showClue, setShowClue] = useState([false, false, false]);

  const toggleClue = (index: number) => {
    let newShowClue = [...showClue];

    if (index > 0 && newShowClue[index - 1] && !newShowClue[index])
      newShowClue[index] = true;
    else if (index === 0 && !newShowClue[index]) newShowClue[index] = true;

    setShowClue(newShowClue);
  };

  return (
    <>
      {isOpen && (
        <div className="tip__wrapper-div">
          <div className="tip__window">
            <div className="tip__button-close">
              <button
                className="tip__button-close-button"
                onClick={toggleOpenClue}
              >
                <IoCloseSharp />
              </button>
            </div>

            <div className="tip__header">
              <h1>Pistas</h1>
            </div>

            <div className="tip__body">
              <div
                className={`tip__tip-div small-tip ${
                  showClue[0] ? "active" : ""
                }`}
                onClick={() => toggleClue(0)}
              >
                <h2 className="tip__tip-header">Pista 1</h2>

                <p className={`tip__tip-text ${showClue[0] ? "" : "active"}`}>
                  Click para una pista.
                </p>

                <p className={`tip__tip-clue ${showClue[0] ? "active" : ""}`}>
                  Pista 1: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>

              <div
                className={`tip__tip-div medium-tip ${
                  showClue[1] ? "active" : ""
                }`}
                onClick={() => toggleClue(1)}
              >
                <h2 className="tip__tip-header">Pista 2</h2>

                <p className={`tip__tip-text ${showClue[1] ? "" : "active"}`}>
                  Click para una pista.
                </p>

                <p className={`tip__tip-clue ${showClue[1] ? "active" : ""}`}>
                  Pista 2: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>

              <div
                className={`tip__tip-div large-tip ${
                  showClue[2] ? "active" : ""
                }`}
                onClick={() => toggleClue(2)}
              >
                <h2 className="tip__tip-header">Pista 3</h2>

                <p className={`tip__tip-text ${showClue[2] ? "" : "active"}`}>
                  Click para la solución.
                </p>

                <p className={`tip__tip-clue ${showClue[2] ? "active" : ""}`}>
                  Pista 3: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>

          <div
            className="tip__window-background"
            onClick={toggleOpenClue}
          ></div>
        </div>
      )}
    </>
  );
}
