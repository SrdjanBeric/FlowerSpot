import axios from "axios";

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
