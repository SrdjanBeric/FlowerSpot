import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import "./style/SightingDetails.css";
import "../../node_modules/ol/ol.css";
import VectorSource from "ol/source/Vector";
import { fromLonLat, Projection } from "ol/proj";
import { Icon, Style } from "ol/style";
import { defaults } from "ol/control";
import markerIceon from "../images/pl-icon-location.png";
import profilePicture from "../images/my-profile-picture.png";
import commentIcon from "../images/comment.png";
import favoriteIcon from "../images/favorite.png";
import { connect } from "react-redux";
import { fetchSighting } from "../redux/sighting/sightingActions";
import { fetchComments } from "../redux/comments/commentActions";
import CommentContainer from "./CommentContainer";
import WriteComment from "./WriteComment";

function SightingDetails({
    fetchSighting,
    sightingData,
    fetchComments,
    commentsData,
    userData,
}) {
    let { id } = useParams();

    const [flower, setFlower] = useState(null);
    const [user, setUser] = useState(null);
    const [inputFocus, setInputFocus] = useState(null);

    useEffect(() => {
        fetchSighting(id);
        fetchComments(id, 1);
    }, []);

    useEffect(() => {
        initMap(
            sightingData?.sighting?.latitude,
            sightingData?.sighting?.longitude
        );
        setFlower(sightingData?.sighting?.flower);
        setUser(sightingData?.sighting?.user);
    }, [sightingData.sighting]);

    const googleMapsClick = (event) => {
        window.open(
            `https://maps.google.com/?q=${sightingData?.sighting?.latitude},${sightingData?.sighting?.longitude}`,
            "_blank"
        );
    };

    const myRef = useRef(null);

    const executeScroll = () => {
        myRef.current.scrollIntoView();
        setInputFocus(!inputFocus);
    };

    if (sightingData.sighting != null) {
        return (
            <div className="sighting-details-content">
                <div id="map" className="map map-div">
                    <div className="view-on-google-and-report">
                        <button
                            onClick={googleMapsClick}
                            className="view-on-google-maps"
                        >
                            View on Google Maps
                        </button>
                        <button className="report-sighting">Report</button>
                    </div>
                    <div className="gradient-background"></div>
                </div>
                <div className="sighting-info-card">
                    <img
                        className="sighting-details-image"
                        src={sightingData?.sighting?.picture}
                    />
                    <div className="sighting-info-content">
                        <div className="sighting-info-content-header">
                            <img
                                style={{ width: "50px", height: "50px" }}
                                src={profilePicture}
                            />
                            <div className="sighting-info-content-header-title">
                                <p className="sighting-info-content-flower">
                                    {flower?.name}
                                </p>
                                <p className="sighting-info-content-owner">
                                    by {user?.full_name}
                                </p>
                            </div>
                        </div>
                        <div className="sighting-info-content-description">
                            {sightingData?.sighting?.description}
                        </div>
                        <hr></hr>
                        <div className="sighting-info-content-actions">
                            <div className="sighting-details-single-action">
                                <img
                                    className="action-icons"
                                    src={commentIcon}
                                />
                                {sightingData?.sighting?.comments_count}{" "}
                                Comments
                            </div>
                            <div className="sighting-details-single-action">
                                <img
                                    className="action-icons"
                                    src={favoriteIcon}
                                />
                                {sightingData?.sighting?.likes_count} Favorites
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sighting-details-comment-section">
                    <hr></hr>
                    <div className="comments-number-and-add-comment">
                        <p className="sighting-details-comments-number">
                            14 Comments
                        </p>
                        {!!userData.id && (
                            <button
                                onClick={executeScroll}
                                className="sighting-details-add-comment"
                            >
                                Add Comment
                            </button>
                        )}
                    </div>
                    <div className="sighting-details-comments">
                        <CommentContainer comments={commentsData?.comments} />
                    </div>
                    {!!userData.id && (
                        <div ref={myRef} className="write-comment-div">
                            <WriteComment
                                inputFocus={inputFocus}
                                sightingId={id}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    } else if (sightingData.error !== "") {
        return <div>{sightingData.error}</div>;
    } else {
        return <div>Loading...</div>;
    }

    function initMap(lat, long) {
        const iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 150],
                anchorXUnits: "fraction",
                anchorYUnits: "pixels",
                src: markerIceon,
                scale: [0.3, 0.3],
            }),
        });
        const iconFeature = new Feature({});
        iconFeature.setStyle(iconStyle);

        const markers = new VectorLayer({
            source: new VectorSource(),
        });
        markers.setZIndex(3);
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([long, lat]),
                zoom: 18,
                maxZoom: 20,
                minZoom: 10,
            }),
            controls: defaults({
                attribution: false,
                zoom: false,
            }),
        });
        map.addLayer(markers);

        const marker = new Feature(new Point(fromLonLat([long, lat])));
        markers.getSource().addFeature(marker);
        markers.setStyle(iconStyle);
    }
}

const mapStateToProps = (state) => {
    return {
        sightingData: state.sighting,
        commentsData: state.comments,
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSighting: (id) => dispatch(fetchSighting(id)),
        fetchComments: (id, page) => dispatch(fetchComments(id, page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SightingDetails);
