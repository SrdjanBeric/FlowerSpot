import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    FETCH_MY_INFO,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "./userTypes";
import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQUEST,
    };
};

export const registerUserSuccess = (token) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: token,
    };
};

export const registerUserFailure = (error) => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error,
    };
};

export const getMyInfoSuccess = (id, first_name, last_name) => {
    return {
        type: FETCH_MY_INFO,
        id: id,
        first_name: first_name,
        last_name: last_name,
    };
};

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

export const getMyInfo = (token) => {
    return (dispatch) => {
        axios
            .get(
                "https://flowrspot-api.herokuapp.com/api/v1/users/me",
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                const user = response.data.user;
                dispatch(
                    getMyInfoSuccess(user.id, user.first_name, user.last_name)
                );
            })
            .catch((error) => {});
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        axios
            .post(
                `https://flowrspot-api.herokuapp.com/api/v1/users/login`,
                null,
                {
                    params: {
                        email,
                        password,
                    },
                }
            )
            .then((response) => {
                const token = response?.data?.auth_token;
                dispatch(loginSuccess(token));
            })
            .catch((error) => {
                // console.log("LOGIN ERROR", error.response.data.error);
                const errorMsg = error.response.data.error;
                dispatch(loginFailure(errorMsg));
            });
    };
};

export const registerUser = ({
    email,
    password,
    first_name,
    last_name,
    date_of_birth,
}) => {
    return (dispatch) => {
        dispatch(registerUserRequest());
        axios
            .post(
                `https://flowrspot-api.herokuapp.com/api/v1/users/register`,
                null,
                {
                    params: {
                        email,
                        password,
                        first_name,
                        last_name,
                        date_of_birth,
                    },
                }
            )
            .then((response) => {
                const token = response?.data?.auth_token;
                dispatch(registerUserSuccess(token));
            })
            .catch((error) => {
                const errorMsg = error.response.data.error;
                dispatch(registerUserFailure(errorMsg));
            });
    };
};
