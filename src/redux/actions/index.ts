import axios from "axios";
import ActionInterface from "../../interfaces/actionInterface";
import { ScorePointsInterface } from "../../interfaces/scorePointsInterface";
import {
  GET_LEVELS_ARR,
  SET_LEVELS_ARR,
  GET_SCORE_POINTS,
  SET_SCORE_POINTS,
  GET_SCORE_POINTS_TABLE,
  RESET_DATA,
  SET_SECRET_LEVEL,
} from "../constants";

const { REACT_APP_API_URL } = process.env;
const levelsArrFalse: boolean[] = [];

const levelsFunction = () => {
  for (let i = 0; i < 16; i++) {
    levelsArrFalse.push(false);
  }
};

levelsFunction();

///////////////////////////////////////////////////////////////////////// LEVELS ARR
export const getLevelsArr = (): ActionInterface => ({
  type: GET_LEVELS_ARR,
});

export const setLevelsArr = (payload: boolean[]): ActionInterface => ({
  type: SET_LEVELS_ARR,
  payload,
});

///////////////////////////////////////////////////////////////////////// SCORE POINTS
export const setScorePoints = (payload: number): ActionInterface => ({
  type: SET_SCORE_POINTS,
  payload,
});

export const getScorePoints = (): ActionInterface => ({
  type: GET_SCORE_POINTS,
});

export const getScorePointsDB =
  () =>
  async (dispatch: any): Promise<void> => {
    let res: ScorePointsInterface | [] = [];

    try {
      const resAux = await axios.get(`${REACT_APP_API_URL}`);

      res = resAux.data
        .sort((a: ScorePointsInterface, b: ScorePointsInterface) => {
          if (a.scorePoints > b.scorePoints) return -1;

          if (a.scorePoints < b.scorePoints) return 1;

          return 0;
        })
        .slice(0, 10);
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: GET_SCORE_POINTS_TABLE,
      payload: res,
    });
  };

///////////////////////////////////////////////////////////////////////// RESET DATA
export const resetData = (): ActionInterface => ({
  type: RESET_DATA,
});

///////////////////////////////////////////////////////////////////////// SECRET LEVEL
export const setSecretLevel = (payload: boolean): ActionInterface => ({
  type: SET_SECRET_LEVEL,
  payload,
});
