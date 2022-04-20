import axios from "axios";
import ActionInterface from "../../interfaces/actionInterface";
import {
  GET_LEVELS_ARR,
  SET_LEVELS_ARR,
  GET_SCORE_POINTS,
  SET_SCORE_POINTS,
} from "../constants";

export const getLevelsArr = (): ActionInterface => ({
  type: GET_LEVELS_ARR,
});

export const setLevelsArr = (payload: boolean[]): ActionInterface => ({
  type: SET_LEVELS_ARR,
  payload,
});

export const setScorePoints = (payload: number): ActionInterface => ({
  type: SET_SCORE_POINTS,
  payload,
});

export const getScorePoints = (): ActionInterface => ({
  type: GET_SCORE_POINTS,
});

export const setScorePointsDB = async (
  name: string,
  scorePoints: number
): Promise<ActionInterface> => {
  let res: any = {};

  try {
    res = await axios.post(`/score`, { name, scorePoints });
  } catch (err) {
    console.log(err);
  }

  return {
    type: SET_SCORE_POINTS,
    payload: res.data.scorePoints,
  };
};
