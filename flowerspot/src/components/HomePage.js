import React, { useState, useEffect } from "react";
import ExplorePanel from "./ExplorePanel";
import FlowerContainer from "./FlowerContainer";
import {
    fetchFlowers,
    fetchSearchFlowers,
} from "../redux/flowers/flowerActions";

// import { getHomePageFlowers, getSearchedFlowers } from "../apis/FlowersAPI";
import { connect } from "react-redux";

function HomePage({ flowersData, fetchFlowers, fetchSearchFlowers }) {
    const [flowers, setFlowers] = useState([]);
    const [previousQuery, setPreviousQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetchFlowers(pageNumber);
        setFlowers(flowersData.flowers);
    }, []);

    useEffect(() => {}, [flowers]);

    const onSearchSubmit = (query) => {
        // Unable to search same query (or empty query) twice
        if (query.length === 0 && query !== previousQuery) {
            setPreviousQuery(query);
            fetchFlowers(pageNumber);
        } else if (query !== previousQuery) {
            fetchSearchFlowers(query);
            setPreviousQuery(query);
        }
    };

    return flowersData.loading ? (
        <div>
            <ExplorePanel onSubmitSearch={onSearchSubmit} />
            <h2>LOADING...</h2>
        </div>
    ) : flowersData.error ? (
        <div>
            <ExplorePanel onSubmitSearch={onSearchSubmit} />
            <h2>{flowersData.error}</h2>
        </div>
    ) : (
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
        fetchFlowers: (pageNumber) => dispatch(fetchFlowers(pageNumber)),
        fetchSearchFlowers: (query) => dispatch(fetchSearchFlowers(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
