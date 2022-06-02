import axios from "axios";
import BaseApiClass from "./BaseApiClass";

export const postSighting = async (sighting) => {
    const formData = new FormData();
    formData.append("picture", sighting.picture);
    formData.append("flower_id", sighting.flower_id);
    formData.append("name", sighting.name);
    formData.append("description", sighting.description);
    formData.append("latitude", sighting.latitude);
    formData.append("longitude", sighting.longitude);
    return await axios
        .post(
            `https://flowrspot-api.herokuapp.com/api/v1/sightings`,
            formData,
            { headers: BaseApiClass.requestConfig().headers }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error.message);
        });
};
