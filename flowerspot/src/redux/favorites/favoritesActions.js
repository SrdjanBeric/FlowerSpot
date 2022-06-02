import {
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
} from "./favoritesTypes";
import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const fetchFavoritesRequest = () => {
    return {
        type: FETCH_FAVORITES_REQUEST,
    };
};

export const fetchFavoritesSuccess = (favorites) => {
    return {
        type: FETCH_FAVORITES_SUCCESS,
        payload: favorites,
    };
};

export const fetchFavoritesError = (error) => {
    return {
        type: FETCH_FAVORITES_FAILURE,
        payload: error,
    };
};

export const fetchFavorites = (page) => {
    return (dispatch) => {
        dispatch(fetchFavoritesRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/flowers/favorites?page=${page}`,
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                const favorites = response.data.fav_flowers;
                dispatch(fetchFavoritesSuccess(favorites));
            })
            .catch((error) => {
                const errorMsg = error.response.data.error;
                dispatch(fetchFavoritesError(errorMsg));
            });
    };
};
