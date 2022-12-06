import { NavLink } from "react-router-dom";
import Snowfall from "react-snowfall";
import "./EasterEgg.scss";

export default function EasterEgg() {
  const snowflake = document.createElement("img");
  snowflake.src = "/brain_white.png";

  return (
    <div className="secret__container">
      <nav className="secret__nav">
        <NavLink className="secret__button" to="/">
          <div className="secret__div-button">
            <p className="secret__button-text">Menu</p>
          </div>
        </NavLink>

        <NavLink className="secret__button" to="/scores">
          <div className="secret__div-button">
            <p className="secret__button-text">Puntaje</p>
          </div>
        </NavLink>
      </nav>

      <div className="secret__title-div">
        <h1 className="secret__title">
          <span className="secret__title-brain">Brain</span> Games{" "}
          <span className="secret__title-es">ES</span>
        </h1>
      </div>

      <Snowfall
        color="red"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
        snowflakeCount={200}
        radius={[20, 30]}
        wind={[0, 0]}
        speed={[0.5, 1]}
        rotationSpeed={[-0.5, 0.5]}
        images={[snowflake]}
      />

      <audio autoPlay loop>
        <source src="/easterEgg.mp3" type="audio/mpeg" />
        <source src="/easterEgg.ogv" type="audio/ogg" />
      </audio>
    </div>
  );
}
