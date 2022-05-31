import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    ADD_COMMENT,
} from "./commentTypes";
import axios from "axios";
import BaseApiClass from "../../apis/BaseApiClass";

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST,
    };
};

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments,
    };
};

export const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error,
    };
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment,
    };
};

export const fetchComments = (id, page) => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios
            .get(
                `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}/comments?page=${page}`,
                BaseApiClass.requestConfig()
            )
            .then((response) => {
                const comments = response.data.comments;
                dispatch(fetchCommentsSuccess(comments));
            })
            .catch((error) => {
                const errorMsg = error.response.data.error;
                dispatch(fetchCommentsFailure(errorMsg));
            });
    };
};
