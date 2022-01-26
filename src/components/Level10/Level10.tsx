import React from "react";
import "./Level10.scss";

export default function Level10() {
  return (
    <div className="level10__container">
      <div className="level10__puzzle">
        <div className="level10__div-columns-headers">
          <span className="level10__column-header">\</span>
          <span className="level10__column-header">1</span>
          <span className="level10__column-header">2</span>
          <span className="level10__column-header">3</span>
          <span className="level10__column-header">4</span>
          <span className="level10__column-header">5</span>
        </div>
        <div className="level10__div-rows">
          <div className="level10__row">
            <span className="level10__row-header">1</span>
            <span className="level10__row-text">A</span>
            <span className="level10__row-text">B</span>
            <span className="level10__row-text">C</span>
            <span className="level10__row-text">D</span>
            <span className="level10__row-text">E</span>
          </div>

          <div className="level10__row">
            <span className="level10__row-header">2</span>
            <span className="level10__row-text">F</span>
            <span className="level10__row-text">G</span>
            <span className="level10__row-text">H</span>
            <span className="level10__row-text">I/J</span>
            <span className="level10__row-text">K</span>
          </div>

          <div className="level10__row">
            <span className="level10__row-header">3</span>
            <span className="level10__row-text">L</span>
            <span className="level10__row-text">M</span>
            <span className="level10__row-text">N</span>
            <span className="level10__row-text">O</span>
            <span className="level10__row-text">P</span>
          </div>

          <div className="level10__row">
            <span className="level10__row-header">4</span>
            <span className="level10__row-text">Q</span>
            <span className="level10__row-text">R</span>
            <span className="level10__row-text">S</span>
            <span className="level10__row-text">T</span>
            <span className="level10__row-text">U</span>
          </div>

          <div className="level10__row">
            <span className="level10__row-header">5</span>
            <span className="level10__row-text">V</span>
            <span className="level10__row-text">W</span>
            <span className="level10__row-text">X</span>
            <span className="level10__row-text">Y</span>
            <span className="level10__row-text">Z</span>
          </div>
        </div>
      </div>

      <div className="level10__guess-container">
        <span className="level10__guess">3534315412244543</span>
      </div>
    </div>
  );
}
