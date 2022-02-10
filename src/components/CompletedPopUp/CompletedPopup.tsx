import React from "react";
import { FaCheck } from "react-icons/fa";
import "./CompletedPopup.scss";

export default function CompletedPopup() {
  return (
    <>
      {true && (
        <div className="completed-popup">
          <div className="completed-popup__content">
            <div className="completed-popup__content-icon">
              <div className="completed-popup__div-icon">
                <FaCheck />
              </div>
            </div>
            <div className="completed-popup__content-text">
              <h1>Completaste el nivel</h1>
            </div>
            <div className="completed-popup__content-button">
              <button className="completed-popup__button">Continuar</button>
            </div>
          </div>

          <div className="completed-popup__window-background"></div>
        </div>
      )}
    </>
  );
}
