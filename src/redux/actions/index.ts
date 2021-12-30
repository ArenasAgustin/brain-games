import ActionInterface from "../../interfaces/actionInterface";
import { GET_LEVELSARR, SET_LEVELSARR } from "../constants";

export const getLevelsArr = (): ActionInterface => ({
    type: GET_LEVELSARR,
})

export const setLevelsArr = (payload: boolean[]): ActionInterface => ({
    type: SET_LEVELSARR,
    payload,
})