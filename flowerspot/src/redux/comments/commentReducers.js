import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from "./commentTypes";

const initialState = {
    loading: false,
    comments: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: "",
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                loading: false,
                comments: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
