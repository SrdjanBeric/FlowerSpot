import React, { useEffect, useState } from "react";
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
import flowerImage from "../images/flower.png";
import profilePicture from "../images/my-profile-picture.png";
import commentIcon from "../images/comment.png";
import favoriteIcon from "../images/favorite.png";
import { connect } from "react-redux";
import { fetchSighting } from "../redux/sighting/sightingActions";

function SightingDetails({ fetchSighting, sightingData }) {
    let { id } = useParams();

    const [flower, setFlower] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchSighting(id);
    }, []);

    useEffect(() => {
        initMap(
            sightingData?.sighting?.latitude,
            sightingData?.sighting?.longitude
        );
        setFlower(sightingData?.sighting?.flower);
        setUser(sightingData?.sighting?.user);
    }, [sightingData.sighting]);

    if (sightingData.sighting != null) {
        return (
            <div className="sighting-details-content">
                <div id="map" className="map map-div">
                    <div className="view-on-google-and-report">
                        <button className="view-on-google-maps">
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSighting: (id) => dispatch(fetchSighting(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SightingDetails);