import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SightingContainer from "./SightingContainer";
import "./style/SightingList.css";
import { fetchSightings } from "../redux/sightings/sightingsActions";
import backgroundImage from "../images/flower-detail-background.png";

function SightingList({ fetchSightings, sightingsData }) {
    let { page } = useParams();

    useEffect(() => {
        fetchSightings(page);
    }, []);

    return (
        <div>
            <div className="sighting-list-header">
                <img
                    className="sighting-list-background-img"
                    src={backgroundImage}
                />
                <div className="sighting-list-header-content">
                    <div className="sighting-list-header-text">
                        <p className="sighting-list-header-title">
                            Sighting List
                        </p>
                        <p className="sighting-list-header-description">
                            Explore between more than 8.427 sightings
                        </p>
                    </div>
                    <button className="sighting-list-header-button">
                        + Add New Sighting
                    </button>
                </div>
            </div>
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
