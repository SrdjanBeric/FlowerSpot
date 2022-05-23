import {
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FETCH_FLOWERS_REQUEST,
} from "./flowerTypes";
import axios from "axios";

export const fetchFlowersRequest = () => {
    return {
        type: FETCH_FLOWERS_REQUEST,
    };
};

export const fetchFlowersSuccess = (flowers) => {
    return {
        type: FETCH_FLOWERS_SUCCESS,
        payload: flowers,
    };
};

export const fetchFlowersFailure = (error) => {
    return {
        type: FETCH_FLOWERS_FAILURE,
        payload: error,
    };
};

export const fetchFlowers = () => {
    return (dispatch) => {
        dispatch(fetchFlowersRequest);
        axios
            .get("https://flowrspot-api.herokuapp.com/api/v1/flowers?page=1")
            .then((response) => {
                const flowers = response?.data?.flowers;
                dispatch(fetchFlowersSuccess(flowers));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchFlowersFailure(errorMsg));
            });
    };
};
