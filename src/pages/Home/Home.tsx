import { NavLink } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__title-div">
        <h1 className="home__title">
          <span className="home__title-brain">Brain</span> Games{" "}
          <span className="home__title-es">ES</span>
        </h1>
      </div>

      <NavLink className="home__button" to="select">
        <div className="home__button-container">
          <p className="home__button-text">Elegir nivel</p>
        </div>
      </NavLink>
    </div>
  );
}
