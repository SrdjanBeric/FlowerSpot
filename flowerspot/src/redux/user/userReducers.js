import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
} from "./userTypes";

const initialState = {
    loading: false,
    token: "",
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                token: action.payload,
                error: "",
            };
        case REGISTER_USER_FAILURE:
            return {
                loading: false,
                token: "",
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
