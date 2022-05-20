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
