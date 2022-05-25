import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    FETCH_MY_INFO,
} from "./userTypes";

const initialState = {
    loading: false,
    token: "",
    error: "",
    id: "",
    first_name: "",
    last_name: "",
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
        case FETCH_MY_INFO:
            return {
                ...state,
                id: action.id,
                first_name: action.first_name,
                last_name: action.last_name,
            };
        default:
            return state;
    }
};

export default reducer;
