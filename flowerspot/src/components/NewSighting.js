import React, { useEffect, useState } from "react";
import "./style/NewSighting.css";
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
import { fromLonLat, Projection, transform } from "ol/proj";
import { Icon, Style } from "ol/style";
import { defaults } from "ol/control";
import markerIceon from "../images/pl-icon-location.png";

function NewSighting() {
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);
    const markers = new VectorLayer({
        source: new VectorSource(),
    });

    useEffect(() => {
        initMap(0, 0);
    }, []);

    const initMap = (lat, long) => {
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

        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([long, lat]),
                zoom: 3,
                maxZoom: 20,
                minZoom: 3,
            }),
            controls: defaults({
                attribution: false,
                zoom: false,
            }),
        });
        map.addLayer(markers);

        map.on("click", (e) => {
            var latLong = transform(e.coordinate, "EPSG:3857", "EPSG:4326");
            setLong(latLong[0]);
            setLat(latLong[1]);
            displayMarker(latLong[0], latLong[1]);
        });

        markers.setStyle(iconStyle);
    };

    const displayMarker = (x, y) => {
        const marker = new Feature(new Point(fromLonLat([x, y])));
        markers.getSource().refresh();
        markers.getSource().addFeature(marker);
    };

    return (
        <div className="new-sighting-content">
            <div id="map" className="map" />
            <div className="new-sighting-card">
                <div className="new-sighting-card-header">
                    <p className="new-sighting-card-heaeder-title">
                        Add New Sighting
                    </p>
                    <p className="new-sighting-card-header-description">
                        Explore between more than 8.427 sightings
                    </p>
                </div>
                <div className="new-sighting-card-first-row">
                    <div className="new-sighting-card-input-div">
                        <input className="new-sighting-card-title-input" />
                        <span className="new-sighting-card-input-span">
                            Title of the sighting
                        </span>
                    </div>
                    <div className="new-sighting-card-input-div">
                        <input
                            className="new-sighting-card-coordinates-input"
                            type="text"
                            disabled
                            value={long}
                            onChange={(e) => {
                                setLong(e.target.value);
                            }}
                        />
                        <span className="new-sighting-card-input-span">
                            Longitude
                        </span>
                    </div>
                    <div className="new-sighting-card-input-div">
                        <input
                            className="new-sighting-card-coordinates-input"
                            type="text"
                            disabled
                            value={lat}
                            onChange={(e) => {
                                setLat(e.target.value);
                            }}
                        />
                        <span className="new-sighting-card-input-span">
                            Latitude
                        </span>
                    </div>
                    <button className="new-sighting-card-add-photo">
                        Add a Photo
                    </button>
                </div>
                <div className="new-sighting-card-description-div">
                    <textarea className="new-sighting-card-description" />
                    <span className="new-sighting-card-input-span">
                        Write a description...
                    </span>
                </div>
                <div style={{ width: "100%" }}>
                    <button className="new-sighting-card-create-new-sighting">
                        Create new Sighting
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewSighting;
