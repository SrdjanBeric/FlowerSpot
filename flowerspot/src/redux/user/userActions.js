import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
} from "./userTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

export const registerUser = ({
    email,
    password,
    first_name,
    last_name,
    date_of_birth,
    close,
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
                document.cookie = token;
                close();
            })
            .catch((error) => {
                const errorMsg = error.message;
                alert(errorMsg);
                dispatch(registerUserFailure(errorMsg));
            });
    };
};
