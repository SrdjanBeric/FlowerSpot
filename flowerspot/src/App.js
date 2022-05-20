import React, { useState, useEffect } from "react";
import ExplorePanel from "./components/ExplorePanel";
import FlowerCard from "./components/FlowerCard";
import FlowerContainer from "./components/FlowerContainer";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import axios from "axios";
import HomePage from "./components/HomePage";

function App() {
    // const [flowers, setFlowers] = useState([]);

    // useEffect(() => {
    //     getFlowers();
    // }, []);

    // const getFlowers = () => {
    //     axios
    //         .get("https://flowrspot-api.herokuapp.com/api/v1/flowers?page=1")
    //         .then((response) => {
    //             const allFlowers = response.data.flowers;
    //             setFlowers(allFlowers);
    //             console.log(response.data.flowers);
    //         })
    //         .catch((error) => console.error(`Error: ${error}`));
    // };

    return (
        <div className="main-page">
            <Navigationbar />
            <HomePage />
        </div>
    );
}

export default App;
