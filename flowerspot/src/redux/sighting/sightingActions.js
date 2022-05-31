import {
    FETCH_SIGHTING_REQUEST,
    FETCH_SIGHTING_SUCCESS,
    FETCH_SIGHTING_FAILURE,
} from "./sightingTypes";

import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const fetchSightingRequest = () => {
    return {
        type: FETCH_SIGHTING_REQUEST,
    };
};

export const fetchSightingSuccess = (sighting) => {
    return {
        type: FETCH_SIGHTING_SUCCESS,
        payload: sighting,
    };
};

export const fetchSightingError = (error) => {
    return {
        type: FETCH_SIGHTING_FAILURE,
        payload: error,
    };
};

export const fetchSighting = (id) => {
    return (dispatch) => {
        dispatch(fetchSightingRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}`,
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                const sighting = response.data.sighting;
                dispatch(fetchSightingSuccess(sighting));
            })
            .catch((error) => {
                const errorMsg = error.response.data.error;
                dispatch(fetchSightingError(errorMsg));
            });
    };
};
