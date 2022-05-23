import {
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FETCH_FLOWERS_REQUEST,
} from "./flowerTypes";

const initialState = {
    loading: false,
    flowers: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLOWERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_FLOWERS_SUCCESS:
            return {
                loading: false,
                flowers: action.payload,
                error: "",
            };
        case FETCH_FLOWERS_FAILURE:
            return {
                loading: false,
                flowers: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
