import {
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FETCH_FLOWERS_REQUEST,
    FETCH_SEARCH_FLOWERS,
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
        case FETCH_SEARCH_FLOWERS:
            return {
                ...state,
                query: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
