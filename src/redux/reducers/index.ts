import ActionInterface from "../../interfaces/actionInterface";
import StateInterface from "../../interfaces/stateInterface";
import {
  GET_LEVELS_ARR,
  GET_SCORE_POINTS,
  GET_SCORE_POINTS_TABLE,
  RESET_DATA,
  SET_LEVELS_ARR,
  SET_SCORE_POINTS,
  SET_SECRET_LEVEL,
} from "../constants";

const levelsArrFalse: boolean[] = [];
const localStorage = window.localStorage;

const levelsFunction = () => {
  for (let i = 0; i < 16; i++) {
    levelsArrFalse.push(false);
  }
};

levelsFunction();

let initialState = {
  levelsArr: levelsArrFalse,
  scorePoints: 0,
  scorePointsTable: [],
  secretLevel: false,
};

const setAndGetLocalStorage = () => {
  let levelsArr = localStorage.getItem("levelsArr");
  if (levelsArr) initialState.levelsArr = JSON.parse(levelsArr);

  let scorePoints = localStorage.getItem("scorePoints");
  if (scorePoints) initialState.scorePoints = JSON.parse(scorePoints);
};

setAndGetLocalStorage();

const reducer = (
  state: StateInterface = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    ///////////////////////////////////////////////////////////////////////// LEVELS ARR
    case GET_LEVELS_ARR:
      return {
        ...state,
      };

    case SET_LEVELS_ARR:
      localStorage.setItem("levelsArr", JSON.stringify(payload));

      return {
        ...state,
        levelsArr: payload,
      };

    ///////////////////////////////////////////////////////////////////////// SCORE POINTS
    case GET_SCORE_POINTS:
      return {
        ...state,
      };

    case SET_SCORE_POINTS:
      localStorage.setItem("scorePoints", JSON.stringify(payload));

      return {
        ...state,
        scorePoints: state.scorePoints + payload,
      };

    case GET_SCORE_POINTS_TABLE:
      return {
        ...state,
        scorePointsTable: payload,
      };

    ///////////////////////////////////////////////////////////////////////// RESET DATA
    case RESET_DATA:
      localStorage.setItem("levelsArr", JSON.stringify(levelsArrFalse));
      localStorage.setItem("scorePoints", JSON.stringify(0));

      return {
        ...state,
        levelsArr: levelsArrFalse,
        scorePoints: 0,
      };

    ///////////////////////////////////////////////////////////////////////// SECRET LEVEL
    case SET_SECRET_LEVEL:
      return {
        ...state,
        secretLevel: payload,
      };

    default:
      return state;
  }
};

export default reducer;
