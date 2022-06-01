import {
    FETCH_SIGHTING_REQUEST,
    FETCH_SIGHTING_SUCCESS,
    FETCH_SIGHTING_FAILURE,
} from "./sightingTypes";

const initialState = {
    loading: false,
    sighting: null,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIGHTING_REQUEST:
            return {
                ...state,
                loading: true,
                sighting: null,
                error: "",
            };
        case FETCH_SIGHTING_SUCCESS:
            return {
                ...state,
                loading: false,
                sighting: action.payload,
                error: "",
            };
        case FETCH_SIGHTING_FAILURE:
            return {
                ...state,
                loading: false,
                sighting: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
