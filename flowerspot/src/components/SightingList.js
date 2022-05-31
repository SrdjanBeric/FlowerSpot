import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SightingContainer from "./SightingContainer";
import "./style/SightingList.css";
import { fetchSightings } from "../redux/sightings/sightingsActions";

function SightingList({ fetchSightings, sightingsData }) {
    useEffect(() => {
        fetchSightings(1);
    }, []);

    return (
        <div>
            <SightingContainer sightings={sightingsData} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sightingsData: state.sightings,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSightings: (page) => dispatch(fetchSightings(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SightingList);
