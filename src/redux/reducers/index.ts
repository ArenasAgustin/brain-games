import ActionInterface from "../../interfaces/actionInterface";
import StateInterface from "../../interfaces/stateInterface";
import { GET_LEVELS_ARR, GET_SCORE_POINTS, SET_LEVELS_ARR, SET_SCORE_POINTS } from "../constants";

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
}

const reducer = (state: StateInterface = initialState, { type, payload }: ActionInterface) => {
    switch (type) {

        // ----------------------------- Levels Arr
        case GET_LEVELS_ARR:
            return {
                ...state,
            };

        case SET_LEVELS_ARR:
            return {
                ...state,
                levelsArr: payload,
            };

        // ----------------------------- Score Points
        case GET_SCORE_POINTS:
            return {
                ...state,
            };

        case SET_SCORE_POINTS:
            return {
                ...state,
                scorePoints: state.scorePoints + payload,
            };

        default:
            return state;
    }
};


export default reducer