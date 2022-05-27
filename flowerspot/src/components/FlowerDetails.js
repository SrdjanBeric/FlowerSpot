import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flowerProfile from "../images/flower-profile.png";
import flowerBackground from "../images/flower-detail-background.png";
import bookmark from "../images/bookmark.png";
import "./style/FlowerDetails.css";
import { fetchFlower } from "../redux/singleFlower/singleFlowerActions";
import { connect } from "react-redux";
function FlowerDetails({ flowerData, fetchFlower }) {
    let { id } = useParams();

    useEffect(() => {
        fetchFlower(id);
    }, []);

    if (flowerData.flower != null) {
        return (
            <div className="flower-details-content">
                <div className="flower-details-upper-content">
                    <img
                        className="flower-details-cover"
                        src={flowerBackground}
                    />
                    <div className="flower-detail-header">
                        <div className="flower-detail-left-align">
                            <div>
                                <img
                                    className="flower-profile-picture"
                                    src={flowerData.flower.profile_picture}
                                />
                            </div>
                            <div className="flower-detail-cover-info">
                                <div className="flower-detail-bookmark-sighting">
                                    <img
                                        className="flower-detail-bookmark-icon"
                                        src={bookmark}
                                    />
                                    <button className="flower-detail-sighting-button">
                                        {flowerData.flower.sightings} sightings
                                    </button>
                                </div>
                                <p className="flower-detail-name">
                                    {flowerData.flower.name}
                                </p>
                                <p className="flower-detail-latin">
                                    {flowerData.flower.latin_name}
                                </p>
                            </div>
                        </div>
                        <div className="flower-detail-right-align">
                            <button className="flower-detail-add-new-sighting-button">
                                + Add New Sighting
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: "3",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        height: "230px",
                        marginTop: "10px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flex: "2",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}
                    >
                        {flowerData.flower.features.map((feature) => (
                            <p key={feature} className="flower-detail-feature">
                                {feature}
                            </p>
                        ))}
                    </div>
                    <div className="flower-detail-long-description">
                        <p className="flower-detail-long-description-text">
                            {flowerData.flower.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    } else if (flowerData.error !== "") {
        return <div>{flowerData.error}</div>;
    } else {
        return <div>Loading...</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        flowerData: state.singleFlower,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFlower: (id) => dispatch(fetchFlower(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowerDetails);
