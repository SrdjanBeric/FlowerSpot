import {
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
} from "./favoritesTypes";

const initialState = {
    loading: false,
    favorites: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAVORITES_REQUEST:
            return {
                ...state,
                loading: true,
                favorites: [],
                error: "",
            };
        case FETCH_FAVORITES_SUCCESS:
            return {
                loading: false,
                favorites: action.payload,
                error: "",
            };
        case FETCH_FAVORITES_FAILURE:
            return {
                loading: false,
                favorites: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
