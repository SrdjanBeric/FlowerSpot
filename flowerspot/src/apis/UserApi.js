import axios from "axios";
import BaseApiClass from "./BaseApiClass";

export const getUserInfo = async (user_id) => {
    return await axios
        .get(`https://flowrspot-api.herokuapp.com/api/v1/users/${user_id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const getUserSightings = async (user_id) => {
    return await axios
        .get(
            `https://flowrspot-api.herokuapp.com/api/v1/users/${user_id}/sightings`
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
