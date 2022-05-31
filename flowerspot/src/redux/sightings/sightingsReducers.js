import {
    FETCH_SIGHTINGS_REQUEST,
    FETCH_SIGHTINGS_SUCCESS,
    FETCH_SIGHTINGS_FAILURE,
} from "./sightingsTypes";

const initialState = {
    loading: false,
    sightings: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIGHTINGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SIGHTINGS_SUCCESS:
            return {
                loading: false,
                sightings: action.payload,
                error: "",
            };
        case FETCH_SIGHTINGS_FAILURE:
            return {
                loading: false,
                sightings: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
