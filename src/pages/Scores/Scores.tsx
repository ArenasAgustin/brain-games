import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ScorePopup from "../../components/ScorePopup/ScorePopup";
import { ScorePointsInterface } from "../../interfaces/scorePointsInterface";
import StateInterface from "../../interfaces/stateInterface";
import { getScorePointsDB } from "../../redux/actions";
import "./Scores.scss";

export default function Scores() {
  const dispatch = useDispatch();

  const scorePointsTable = useSelector(
    (state: StateInterface) => state.scorePointsTable
  );
  const scorePoints = useSelector((state: StateInterface) => state.scorePoints);

  const [scorePointsDB, setScorePointsDB] = useState(scorePointsTable);
  const [sPoints, setSPoints] = useState(scorePoints);
  const [isOpen, setShowClue] = useState(false);

  const toggleOpenClue = () => {
    if (sPoints) setShowClue((prev) => !prev);
  };

  useEffect(() => {
    setSPoints(scorePoints);
  }, [scorePoints]);

  useEffect(() => {
    setScorePointsDB(scorePointsTable);
  }, [scorePointsTable]);

  useEffect(() => {
    dispatch(getScorePointsDB());
  }, [dispatch]);

  return (
    <div>
      <div className="nav__container">
        <div className="nav__links-container">
          <NavLink className="nav__button" to="/select">
            <div className="nav__div-button">
              <p className="nav__button-text">Niveles</p>
            </div>
          </NavLink>
        </div>

        <div className="nav__txt-container">
          <div className="nav__level">
            <p className="nav__level-text">Puntos</p>
          </div>

          <div className="nav__score">
            <span className="nav__score-points">Puntos: {sPoints}</span>
          </div>
        </div>

        <div className="nav__tips-container">
          <span className="nav__score-points">Puntos: {sPoints}</span>

          <button className="nav__button" onClick={toggleOpenClue}>
            <div className="nav__div-button">
              <p className="nav__button-text">Guardar Puntos</p>
            </div>
          </button>
        </div>
      </div>

      <div className="score__container">
        <table className="score__table">
          <thead>
            <tr>
              <th>Nombre</th>

              <th>Puntos</th>
            </tr>
          </thead>

          <tbody>
            {scorePointsDB.length > 0 ? (
              scorePointsDB.map((scorePointDB: ScorePointsInterface) => (
                <tr key={scorePointDB._id}>
                  <td>{scorePointDB.name}</td>

                  <td>{scorePointDB.scorePoints}</td>
                </tr>
              ))
            ) : (
              <tr>
                <Loading />
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <ScorePopup
          isOpen={isOpen}
          toggleOpenClue={toggleOpenClue}
          points={sPoints}
        />
      </div>
    </div>
  );
}
