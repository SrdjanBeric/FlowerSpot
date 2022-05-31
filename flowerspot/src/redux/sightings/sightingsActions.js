import {
    FETCH_SIGHTINGS_REQUEST,
    FETCH_SIGHTINGS_SUCCESS,
    FETCH_SIGHTINGS_FAILURE,
} from "./sightingsTypes";
import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const fetchSightingsRequest = () => {
    return {
        type: FETCH_SIGHTINGS_REQUEST,
    };
};

export const fetchSightingsSuccess = (sightings) => {
    return {
        type: FETCH_SIGHTINGS_SUCCESS,
        payload: sightings,
    };
};

export const fetchSightingsError = (error) => {
    return {
        type: FETCH_SIGHTINGS_FAILURE,
        payload: error,
    };
};

export const fetchSightings = (page) => {
    return (dispatch) => {
        dispatch(fetchSightingsRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/sightings?page=${page}`,
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                const sightings = response.data.sightings;
                dispatch(fetchSightingsSuccess(sightings));
            })
            .catch((error) => {
                const errorMsg = error.response.data.error;
                dispatch(fetchSightingsError(errorMsg));
            });
    };
};
