import axios from "axios";
import BaseApiClass from "./BaseApiClass";

export const postComment = async (content, sightingId) => {
    return await axios
        .post(
            `https://flowrspot-api.herokuapp.com/api/v1/sightings/${sightingId}/comments`,
            {
                content: content,
            },
            { headers: BaseApiClass.requestConfig().headers }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
