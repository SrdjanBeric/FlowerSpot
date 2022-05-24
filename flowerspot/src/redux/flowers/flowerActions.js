import {
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FETCH_FLOWERS_REQUEST,
    FETCH_SEARCH_FLOWERS,
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

export const searchFlowers = (query) => {
    return {
        type: FETCH_SEARCH_FLOWERS,
        payload: query,
    };
};

export const fetchFlowers = (pageNumber) => {
    return (dispatch) => {
        dispatch(fetchFlowersRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/flowers?page=${pageNumber}`
            )
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

export const fetchSearchFlowers = (query) => {
    return (dispatch) => {
        dispatch(searchFlowers);
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/flowers/search?query=${query}`
            )
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
