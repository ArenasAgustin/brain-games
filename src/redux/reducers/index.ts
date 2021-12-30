import ActionInterface from "../../interfaces/actionInterface";
import StateInterface from "../../interfaces/stateInterface";
import { GET_LEVELSARR, SET_LEVELSARR } from "../constants";

const levelsArr: boolean[] = [];

const levelsFunction = () => {
    for (let i = 0; i < 10; i++) {
        levelsArr.push(false);
    }
};

levelsFunction();

const initialState = {
    levelsArr: levelsArr,
}

const reducer = (state: StateInterface = initialState, { type, payload }: ActionInterface) => {
    switch (type) {
        case GET_LEVELSARR:
            return {
                ...state,
            };

        case SET_LEVELSARR:
            return {
                ...state,
                levelsArr: payload,
            };

        default:
            return state;
    }
};


export default reducer