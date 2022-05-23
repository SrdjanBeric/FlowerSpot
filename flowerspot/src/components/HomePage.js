import React, { useState, useEffect } from "react";
import ExplorePanel from "./ExplorePanel";
import FlowerContainer from "./FlowerContainer";
import { fetchFlowers } from "../redux/flowers/flowerActions";

import { getHomePageFlowers, getSearchedFlowers } from "../apis/FlowersAPI";
import { connect } from "react-redux";

function HomePage({ flowersData, fetchFlowers }) {
    const [flowers, setFlowers] = useState([]);
    const [previousQuery, setPreviousQuery] = useState("");
    useEffect(() => {
        fetchFlowers();
        console.log(flowersData.flowers);
    }, []);

    useEffect(() => {
        console.log("flowers", flowers);
    }, [flowers]);

    const onSearchSubmit = (query) => {
        console.log(query);
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
            <FlowerContainer
                flowers={flowersData.flowers}
                className="flowers-container"
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        flowersData: state.flower,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFlowers: () => dispatch(fetchFlowers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
