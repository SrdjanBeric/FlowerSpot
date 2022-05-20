import React, { useState, useEffect } from "react";
import ExplorePanel from "./ExplorePanel";
import FlowerContainer from "./FlowerContainer";
import axios from "axios";

import { getHomePageFlowers } from "../apis/FlowersAPI";

function HomePage() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        getHomePageFlowers(1)?.then((resp) => setFlowers(resp));
    }, []);

    return (
        <div>
            <ExplorePanel />
            <FlowerContainer flowers={flowers} className="flowers-container" />
        </div>
    );
}

export default HomePage;
