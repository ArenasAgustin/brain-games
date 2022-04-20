import ActionInterface from "../../interfaces/actionInterface";
import StateInterface from "../../interfaces/stateInterface";
import {
  GET_LEVELS_ARR,
  GET_SCORE_POINTS,
  GET_SCORE_POINTS_TABLE,
  SET_LEVELS_ARR,
  SET_SCORE_POINTS,
} from "../constants";

const levelsArr: boolean[] = [];

const levelsFunction = () => {
  for (let i = 0; i < 16; i++) {
    levelsArr.push(false);
  }
};

levelsFunction();

const initialState = {
  levelsArr: levelsArr,
  scorePoints: 0,
  scorePointsTable: [],
};

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
      return {
        ...state,
        scorePoints: state.scorePoints + payload,
      };

    case GET_SCORE_POINTS_TABLE:
      return {
        ...state,
        scorePointsTable: payload,
      };

    default:
      return state;
  }
};

export default reducer;
