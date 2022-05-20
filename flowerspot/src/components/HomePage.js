import React, { useState, useEffect } from "react";
import ExplorePanel from "./ExplorePanel";
import FlowerContainer from "./FlowerContainer";
import axios from "axios";

import { getHomePageFlowers, getSearchedFlowers } from "../apis/FlowersAPI";

function HomePage() {
    const [flowers, setFlowers] = useState([]);
    const [previousQuery, setPreviousQuery] = useState("");
    useEffect(() => {
        getHomePageFlowers(1)?.then((resp) => setFlowers(resp));
    }, []);

    useEffect(() => {}, [flowers]);

    const onSearchSubmit = (query) => {
        // Unable to search same query (or empty query) twice
        if (query.length == 0 && query !== previousQuery) {
            setPreviousQuery(query);
            getHomePageFlowers(1)?.then((resp) => setFlowers(resp));
        } else if (query !== previousQuery) {
            getSearchedFlowers(query)?.then((resp) => {
                setFlowers(resp);
                setPreviousQuery(query);
            });
        }
    };

    return (
        <div>
            <ExplorePanel onSubmitSearch={onSearchSubmit} />
            <FlowerContainer flowers={flowers} className="flowers-container" />
        </div>
    );
}

export default HomePage;
