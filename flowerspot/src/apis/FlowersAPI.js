import axios from "axios";
import BaseApiClass from "./BaseApiClass";

export const getHomePageFlowers = async (pageNum) => {
    return await axios
        .get(
            `https://flowrspot-api.herokuapp.com/api/v1/flowers?page=${pageNum}`
        )
        .then((response) => {
            return response?.data?.flowers;
        })
        .catch((e) => console.log(e));
};

export const getSearchedFlowers = async (query) => {
    return await axios
        .get(
            `https://flowrspot-api.herokuapp.com/api/v1/flowers/search?query=${query}`
        )
        .then((response) => {
            return response?.data?.flowers;
        })
        .catch((e) => console.log(e));
};

export const postFavoriteFlower = async (flower_id) => {
    return await axios
        .post(
            `https://flowrspot-api.herokuapp.com/api/v1/flowers/${flower_id}/favorites`,
            null,
            { headers: BaseApiClass.requestConfig().headers }
        )
        .then((response) => {
            console.log(response);
            return response?.data?.fav_flower;
        })
        .catch((e) => console.log(e));
};
