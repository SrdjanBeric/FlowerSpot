import {
    FETCH_FLOWER_REQUEST,
    FETCH_FLOWER_SUCCESS,
    FETCH_FLOWER_FAILURE,
} from "./singleFlowerTypes";
import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const fetchFlowerRequest = () => {
    return {
        type: FETCH_FLOWER_REQUEST,
    };
};

export const fetchFlowerSuccess = (flower) => {
    return {
        type: FETCH_FLOWER_SUCCESS,
        payload: flower,
    };
};

export const fetchFlowerFailure = (error) => {
    return {
        type: FETCH_FLOWER_FAILURE,
        payload: error,
    };
};

export const fetchFlower = (id) => {
    return (dispatch) => {
        dispatch(fetchFlowerRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/flowers/${id}`,
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                console.log("RESPONSE", response.data.flower);
                const flower = response.data.flower;
                dispatch(fetchFlowerSuccess(flower));
            })
            .catch((error) => {
                console.log("ERROR", error);
                const errorMsg = error.response.data.error;
                dispatch(fetchFlowerFailure(errorMsg));
            });
    };
};
