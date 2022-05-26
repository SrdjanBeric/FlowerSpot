import {
    FETCH_FLOWER_REQUEST,
    FETCH_FLOWER_SUCCESS,
    FETCH_FLOWER_FAILURE,
} from "./singleFlowerTypes";

const initialState = {
    loading: false,
    flower: null,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLOWER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_FLOWER_SUCCESS:
            return {
                loading: false,
                flower: action.payload,
                error: "",
            };
        case FETCH_FLOWER_FAILURE:
            return {
                loading: false,
                flower: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
