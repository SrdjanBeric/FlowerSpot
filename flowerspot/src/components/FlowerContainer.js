import React, { useState, useEffect } from "react";
import axios from "axios";
import FlowerCard from "./FlowerCard";

function FlowerContainer() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        getFlowers();
    }, []);

    const getFlowers = () => {
        axios
            .get("https://flowrspot-api.herokuapp.com/api/v1/flowers?page=1")
            .then((response) => {
                const allFlowers = response.data.flowers;
                setFlowers(allFlowers)
                console.log(response.data.flowers);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    const renderFlowers = flowers.map((flower)=>{
        return (
            <FlowerCard info={flower}/>
        )
    })
    return (
    <div className="flowers-container">
        {renderFlowers}
    </div>
    );
}

export default FlowerContainer;
