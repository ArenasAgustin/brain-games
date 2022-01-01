import React from "react";
import { NavLink } from "react-router-dom";
import ButtonLevel from "../../components/ButtonLevel/ButtonLevel";
import "./SelectLevel.scss";

export default function SelectLevel() {
  return (
    <div>
      <div>
        <NavLink to="/">Menu</NavLink>
      </div>

      <div className="select-level">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
          <ButtonLevel level={level} key={level} />
        ))}
      </div>
    </div>
  );
}
